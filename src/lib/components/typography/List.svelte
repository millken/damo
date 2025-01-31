<script module lang="ts">
    import { type Snippet, onMount } from "svelte";
    import type { ClassNameValue } from "tailwind-merge";
    import { list, type ListProps as ListVariants, type TextWeightProp } from "@tailus/themer";

    type ListSize = ListVariants["size"];
    type ListInside = ListVariants["inside"];
    type ListSizeProp =
        | ListSize
        | {
              initial?: ListSize;
              sm?: ListSize;
              md?: ListSize;
              lg?: ListSize;
              xl?: ListSize;
              xxl?: ListSize;
          };
    type ListInsideProp =
        | ListInside
        | {
              initial?: ListInside;
              sm?: ListInside;
              md?: ListInside;
              lg?: ListInside;
              xl?: ListInside;
              xxl?: ListInside;
          };
    type ListProps = {
        as?: "ul" | "ol";
        size?: ListSizeProp;
        inside?: ListInsideProp;
        neutral?: boolean;
        type?: ListVariants["type"];
        className?: ClassNameValue;
        children: Snippet;
    };
</script>

<script lang="ts">
    let { as = "ul", size, neutral, inside, type, children, className, ...props }: ListProps = $props();
    as = as || type === "disc" ? "ul" : "ol";

    if (as === "ul" && type === "decimal") {
        console.warn('Warning: You have set "as" to "ul" and "type" to "decimal". This can cause accessibility issues.');
    } else if (as === "ol" && type === "disc") {
        console.warn('Warning: You have set "as" to "ol" and "type" to "disc". This can cause accessibility issues.');
    }
</script>

<svelte:element
    this={as}
    class={list({
        size,
        inside,
        type,
        neutral,
        className,
    })}
    {...props}
>
    {@render children?.()}
</svelte:element>
