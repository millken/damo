<script lang="ts">
    import { marginPropDefs } from '../../props/margin.props.js';
    import { extractProps } from '$lib/helpers/extract-props.js';
    import { textPropDefs } from './text.props.js';
    import { styleToString } from '$lib/helpers/merge-styles.js';
    import Slot from '../slot/Slot.svelte';
    import clsx from 'clsx';
    let {
        ref=$bindable(),
        children,
        ...props
    } = $props();
    const {
        as = "span",
        asChild = false,
        className,
        color,
        ...rest
    } = $derived(extractProps(props, textPropDefs, marginPropDefs));
</script>

{#if asChild} 
<Slot
      {asChild}
      data-accent-color={color}
      {...rest}
      ref={ref}
      class={clsx('rt-Text', className)}
    >
        {@render children?.()}
</Slot>
{:else}
<svelte:element this={as} bind:this={ref} data-accent-color={color} class:rt-Text={true} class={className} {...rest}>
    {@render children?.()}
</svelte:element>
{/if}
