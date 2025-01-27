<script lang="ts">
    import { mergeProps } from "$lib/helpers/merge-props.js";

    let {as="div", asChild, children, ...props } = $props();
    let mergedProps = $derived(mergeProps(props));
</script>
{#if asChild}
    {@render asChild(mergedProps)}
{:else}
    <svelte:element this={as} {...mergedProps}>
        {@render children?.()}
    </svelte:element>
{/if}