<script module lang="ts">
    import { type Snippet, onMount } from "svelte";
    import type { ClassNameValue } from "tailwind-merge";
    import { kbdTheme } from "@tailus/themer";
    type KbdProps = {
        ref?: (node: HTMLElement) => void;
        className?: ClassNameValue;
        children: Snippet;
    };
</script>

<script lang="ts">
    let { ref = $bindable(), className, children, ...props }: KbdProps = $props();
    let el: HTMLElement;
    onMount(() => {
        ref?.(el);
    });
</script>

<svelte:element
    this={"kbd"}
    bind:this={el}
    class={kbdTheme({
        className,
    })}
    {...props}
>
    {@render children?.()}
</svelte:element>
