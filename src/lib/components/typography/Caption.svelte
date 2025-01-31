<script module lang="ts">
    import { type VariantProps, tv } from "tailwind-variants";
    import { type Snippet, onMount } from "svelte";
    import { caption } from "@tailus/themer";
    import type { ClassNameValue } from "tailwind-merge";
    type Weight = VariantProps<typeof caption>["weight"];
    type Size = VariantProps<typeof caption>["size"];
    type Align = VariantProps<typeof caption>["align"];

    type CaptionProps = {
        as?: "p" | "div" | "span" | "em" | "strong" | undefined;
        size?: Size;
        weight?: Weight;
        align?: Align;
        neutral?: boolean;
        className?: ClassNameValue;
        children: Snippet;
    };
</script>

<script lang="ts">
    let { as = "p", size, weight, align, neutral, children, className, ...props }: CaptionProps = $props();
    if (as === "strong") {
        weight = weight || "medium"
        neutral = neutral || true
    } else if (as === "em") {
        neutral = neutral || true
    }
</script>

<svelte:element
    this={as}
    class={caption({
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
