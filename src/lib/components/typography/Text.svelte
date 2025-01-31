<script module lang="ts">
    import { type Snippet, onMount } from "svelte";
    import {type TextProps as TextVariants, type TextAlignProp, type TextWeightProp, text } from "@tailus/themer";
    import type { ClassNameValue } from "tailwind-merge";
    type TextSize = TextVariants["size"]
    type TitleSizeProp = TextSize |  {
        initial?: TextSize,
        sm?: TextSize,
        md?: TextSize,
        lg?: TextSize,
        xl?: TextSize,
        xxl?: TextSize,
    }
    type TextProps = {
        as?: "p" | "div" | "span" | "em" | "strong";
        size?: TitleSizeProp;
        weight?: TextWeightProp;
        align?: TextAlignProp;
        neutral?: boolean;
        className?: ClassNameValue;
        children: Snippet;
    };
</script>

<script lang="ts">
    let { as = "p", size, weight, align, neutral, children, className, ...props }: TextProps = $props();
    if (as === "strong") {
        weight = weight || "medium"
        neutral = neutral || true
    } else if (as === "em") {
        neutral = neutral || true
    }
</script>

<svelte:element
    this={as}
    class={text({
        size,
        weight,
        align,
        neutral,
        className,
    })}
    {...props}
>
    {@render children?.()}
</svelte:element>
