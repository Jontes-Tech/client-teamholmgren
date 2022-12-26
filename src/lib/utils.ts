export const onIdle: (callback: () => void) => any =
	requestIdleCallback || requestAnimationFrame || setTimeout;
