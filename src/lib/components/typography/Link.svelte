<script lang="ts">
    import { extractProps } from '$lib/helpers/extract-props.js';
    import { linkPropDefs } from './link.props.js';
    import Text from './Text.svelte';
    import Slot from '../slot/Slot.svelte';
    import clsx from 'clsx';
    let {
        children,
        ...props
    } = $props();
    const {
        asChild = undefined,
        className, color,
        ...rest
    } = $derived(extractProps(props, linkPropDefs));
</script>

{#if asChild} 
<Slot
      {...props}
    >
        {@render children?.()}
</Slot>
{:else}
    <Text data-accent-color={color} className={clsx('rt-reset', 'rt-Link',className)} {...props}>
    {#snippet asChild(attrs)}
        <a {...attrs}>{@render children?.()}</a>
    {/snippet}
            
    </Text>
{/if}