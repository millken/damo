<script module lang="ts">
    import { type Snippet, onMount } from "svelte";
    import type { ClassValue } from "clsx";
    import type { ClassNameValue } from "tailwind-merge";
    import {
    title,
    type TitleProps as TitleVariants,
    type TextAlignProp,
    type TextWeightProp
} from "@tailus/themer"

type TitleSize = TitleVariants["size"]
type TitleSizeProp = TitleSize |  {
    initial?: TitleSize,
    sm?: TitleSize,
    md?: TitleSize,
    lg?: TitleSize,
    xl?: TitleSize,
    xxl?: TitleSize,
}

    type TitleProps = {
        as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "span" |undefined;
        size?: TitleSizeProp;
        weight?: TextWeightProp;
        align?: TextAlignProp;
        className?: ClassNameValue;
        children: Snippet;
    };
</script>

<script lang="ts">
    let { as = "h1", size, weight, align, className, children, ...props }:TitleProps = $props();
</script>

<svelte:element
    this={as}
    class={title({
        size,
        weight,
        align,
        class: className,
    })}
    {...props}
>
    {@render children?.()}
</svelte:element>
