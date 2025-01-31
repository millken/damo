<script module lang="ts">
    import { type Snippet, onMount } from "svelte";
    import { display, type DisplayProps as DisplayVariants, type TextAlignProp, type TextWeightProp } from "@tailus/themer";
    import type { ClassNameValue } from "tailwind-merge";
    type DisplaySize = DisplayVariants["size"];
    type DisplaySizeProp =
        | DisplaySize
        | {
              initial?: DisplaySize;
              sm?: DisplaySize;
              md?: DisplaySize;
              lg?: DisplaySize;
              xl?: DisplaySize;
              xxl?: DisplaySize;
          };
    type DisplayProps = {
        as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "span";
        size?: DisplaySizeProp;
        weight?: TextWeightProp;
        align?: TextAlignProp;
        className?: ClassNameValue;
        children: Snippet;
    };
</script>

<script lang="ts">
    let { as = "h1", size, weight, align, children, className, ...props }: DisplayProps = $props();
</script>

<svelte:element
    this={as}
    class={display({
        size,
        weight,
        align,
        className,
    })}
    {...props}
>
    {@render children?.()}
</svelte:element>
