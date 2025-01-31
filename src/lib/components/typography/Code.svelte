<script module lang="ts">
    import { type Snippet, onMount } from "svelte";
    import type { ClassNameValue } from "tailwind-merge";
    import { codeTheme, type CodeThemeProps } from "@tailus/themer";
    import type { VariantProps } from "tailwind-variants";

    type Intent = VariantProps<typeof codeTheme>["intent"];

    type CodeProps = {
        intent: CodeThemeProps["intent"];
        className?: ClassNameValue;
        children: Snippet;
    };
</script>

<script lang="ts">
    let { intent, className, children, ...props }: CodeProps = $props();
</script>

<svelte:element
    this={"code"}
    class={codeTheme({
        intent,
        className,
    })}
    {...props}
>
    {@render children?.()}
</svelte:element>
