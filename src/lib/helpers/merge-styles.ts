import type { CSSProperties } from "$lib/props/css.prop.js";

type InlineStyle =
  | Record<string, string | number | null | undefined>
  | undefined;

// Merges CSS styles like `classNames` merges CSS classes
export function mergeStyles(...styles: Array<InlineStyle|unknown>): InlineStyle|undefined {
  let result: InlineStyle = {};

  for (const style of styles) {
    if (style) {
      result = { ...result, ...style };
    }
  }

  return Object.keys(result).length ? result : undefined;
}

export function styleToString(style: InlineStyle|CSSProperties|undefined): string|undefined {
  if (!style) return ;
	return Object.keys(style).reduce((str, key) => {
		if (style[key] === undefined) return str;
		return str + `${key}:${style[key]};`;
	}, '');
}

