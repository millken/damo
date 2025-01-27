/**
 * @template {any[]} Params
 * @param {import('svelte').Snippet<Params>} snippet
 * @param {import('svelte/action').Action<HTMLElement, undefined>} handler
 * @returns {import('svelte').Snippet<Params>}
 */
export function wrapSnippet(snippet, handler) {
	if (handler === undefined) {
		handler = (node) => {
			return {
				destroy() {
				}
			};
		}
	}
	return (node, ...args) => {
		console.log(...args)
		$effect(() => {
			// sometimes `node` is a text node when the snippet is rendered
			// grap the first valid HTMLElement instead
			const element = node.parentElement?.firstElementChild;
			if (!(element instanceof HTMLElement)) return;
			args.forEach(arg => {
				if (typeof arg === 'function') {
					arg = arg();
				}
				console.log(arg)
				if (typeof arg === 'object' && arg !== null) {
					Object.entries(arg).forEach(([key, value]) => {
						element.setAttribute(key, value);
					});
				}
			});
			const actionReturn = handler(element);

			return actionReturn?.destroy;
		});
		return snippet(node, ...args);
	};
}