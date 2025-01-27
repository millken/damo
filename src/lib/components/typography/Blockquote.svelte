<script lang="ts">
    import { extractProps } from '$lib/helpers/extract-props.js';
    import { blockquotePropDefs } from './blockquote.props.js';
    import Slot from '../slot/Slot.svelte';
    import Text from './Text.svelte';
    import clsx from 'clsx';
    import { getContext } from 'svelte';
    import { wrapSnippet } from '$lib/internal/snippet.svelte.js';
    let {
        asChild = false,
        className = undefined,
        children = undefined,
        ...props
    } = $props();
</script>
{#if asChild} 
<Slot
      {...props}
    >
        {@render children?.()}
</Slot>
{:else}
    <Text className={clsx('rt-Blockquote',className)} {...props}>
    {#snippet asChild(attrs)}
        <blockquote {...attrs}>{@render children?.()}</blockquote>
    {/snippet}
            
    </Text>
{/if}