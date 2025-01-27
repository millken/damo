export * from "./utils.js";

const radii = ['none', 'small', 'medium', 'large', 'full'] as const;
export type Radius = (typeof radii)[number]; 

const size = ['1', '2', '3', '4'] as const;
export type Size = (typeof size)[number];
export type Variant = "classic" | "solid" | "soft" | "surface" | "outline" | "ghost";

const breakpoints = ['initial', 'xs', 'sm', 'md', 'lg', 'xl'] as const;
export type Breakpoint = (typeof breakpoints)[number];

const accentColors = ['gray', 'gold', 'bronze', 'brown', 'yellow', 'amber', 'orange', 'tomato', 'red', 'ruby', 'crimson', 'pink', 'plum', 'purple', 'violet', 'iris', 'indigo', 'blue', 'cyan', 'teal', 'jade', 'green', 'grass', 'lime', 'mint', 'sky'] as const;

const grayColors = ['auto', 'gray', 'mauve', 'slate', 'sage', 'olive', 'sand'] as const;

const highContrastColors = ['black', 'white'] as const;

export type AccentColor = (typeof accentColors)[number];
export type GrayColor = (typeof grayColors)[number];
export type HighContrastColor = (typeof highContrastColors)[number];

export type StringToBoolean<T> = T extends "true" | "false" ? boolean : T;

