import storage, { type Subscriber } from './storage';
import { onIdle } from './utils';

export const previousPages = new Array<string>();
export const nextPages = new Array<string>();

export function back() {
	return onIdle(() => {
		nextPages.push(location.pathname);
		previousPages.pop();
		history.back();

		onIdle(() => {
			storage.setItem('route', location.pathname);
		});
	});
}

export function navigate(pathname: string) {
	return onIdle(() => {
		previousPages.push(location.pathname);
		history.pushState(null, '', pathname);

		onIdle(() => storage.setItem('route', location.pathname));
	});
}

export function forward() {
	return onIdle(() => {
		const nextPage = nextPages.pop();

		if (nextPage) {
			return navigate(nextPage);
		} else {
			previousPages.push(location.pathname);

			return history.forward();
		}
	});
}

export function subscribe(callback: Subscriber) {
	return storage.subscribe('route', callback);
}

export default { back, navigate, forward, subscribe };

onIdle(() => {
	const modifiedElements = new WeakSet<Element>();

	const modifyElement = (element: Element) => {
		modifiedElements.add(element);

		if (element instanceof HTMLAnchorElement) {
			element.addEventListener('click', (event) => {
				event.preventDefault();

				navigate(new URL(element.href).pathname);
			});
		}

		for (const childElement of element.querySelectorAll('*')) {
			modifyElement(childElement);
		}
	};

	const observer = new MutationObserver((observations) => {
		for (const observation of observations) {
			for (const node of observation.addedNodes) {
				if (node instanceof Element) {
					onIdle(() => modifyElement(node));
				}
			}
		}
	});

	observer.observe(document, {
		childList: true,
		subtree: true,
	});

	onIdle(() => {
		for (const element of document.querySelectorAll('*')) {
			if (element instanceof HTMLAnchorElement) {
				onIdle(() => modifyElement(element));
			}
		}
	});
});
