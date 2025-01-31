<script module lang="ts">
    import { type Snippet, onMount } from "svelte";
    import type { ClassNameValue } from "tailwind-merge";
    import { link, type LinkProps as LinkVariants, type TextAlignProp, type TextWeightProp } from "@tailus/themer";

    type LinkSize = LinkVariants["size"];
    type LinkVariant = LinkVariants["variant"];
    type LinkIntent = LinkVariants["intent"];
    type LinkVisited = LinkVariants["visited"];
    type LinkSizeProp =
        | LinkSize
        | {
              initial?: LinkSize;
              sm?: LinkSize;
              md?: LinkSize;
              lg?: LinkSize;
              xl?: LinkSize;
              xxl?: LinkSize;
          };

    type LinkVariantProp =
        | LinkVariant
        | {
              initial?: LinkVariant;
              sm?: LinkVariant;
              md?: LinkVariant;
              lg?: LinkVariant;
              xl?: LinkVariant;
              xxl?: LinkVariant;
          };

    type LinkIntentProp =
        | LinkIntent
        | {
              initial?: LinkIntent;
              sm?: LinkIntent;
              md?: LinkIntent;
              lg?: LinkIntent;
              xl?: LinkIntent;
              xxl?: LinkIntent;
          };

    type LinkVisitedProp =
        | LinkVisited
        | {
              initial?: LinkVisited;
              sm?: LinkVisited;
              md?: LinkVisited;
              lg?: LinkVisited;
              xl?: LinkVisited;
              xxl?: LinkVisited;
          };

    type LinkProps = {
        size?: LinkSizeProp;
        align?: TextAlignProp;
        weight?: TextWeightProp;
        variant?: LinkVariantProp;
        intent?: LinkIntentProp;
        visited?: LinkVisitedProp;
        className?: ClassNameValue;
        children: Snippet;
    };
</script>

<script lang="ts">
    let { size, weight, align, variant, intent, visited, children, className, ...props }: LinkProps = $props();
</script>

<svelte:element
    this={"a"}
    class={link({
        size,
        variant,
        visited,
        intent,
        weight,
        align,
        className,
    })}
    {...props}
>
    {@render children?.()}
</svelte:element>
