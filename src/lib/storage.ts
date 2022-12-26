import { cacheFn } from 'ps-std';

import { onIdle } from './utils';

export const inLocalStorage = new Map<string, string>();
export const toLocalStorage = new Map<string, string>();

export function update(key: string) {
	const valueToLocalStorage = toLocalStorage.get(key);
	const valueInLocalStorage = inLocalStorage.get(key);

	if (valueInLocalStorage !== valueToLocalStorage) {
		localStorage.setItem(key, valueToLocalStorage);
		inLocalStorage.set(key, valueToLocalStorage);
	}
}

export function setItem(
	key: string,
	value: string | number | bigint | boolean | undefined
): string {
	const stringValue = value ? String(value) : '';

	toLocalStorage.set(key, stringValue);

	onIdle(() => update(key));

	for (const subscriber of getSubscribers(key)) {
		onIdle(() => subscriber(stringValue));
	}

	return stringValue;
}

export function getItem(key: string): string {
	if (toLocalStorage.has(key)) {
		return toLocalStorage.get(key);
	}

	const itemInLocalStorage = localStorage.getItem(key) || '';

	inLocalStorage.set(key, itemInLocalStorage);

	return setItem(key, itemInLocalStorage);
}

export type Subscriber = (value: string) => any;

export const getSubscribers = cacheFn<string, Subscriber[]>((key: string) => {
	return new Array<Subscriber>();
});

export function subscribe(key: string, callback: Subscriber) {
	getSubscribers(key).push(callback);
}

export default {
	getItem,
	setItem,
	subscribe,
};
