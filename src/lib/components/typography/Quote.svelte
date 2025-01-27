<script lang="ts">
    import { extractProps } from '$lib/helpers/extract-props.js';
    import { quotePropDefs } from './quote.props.js';
    import Slot from '../slot/Slot.svelte';
    import clsx from 'clsx';
    let {
        children,
        ...props
    } = $props();
    const {
        asChild = undefined,
        className,
        ...rest
    } = $derived(extractProps(props, quotePropDefs));
</script>

<Slot
    as="q"
      {asChild}
      {...rest}
      class={clsx('rt-Quote', className)}
    >
        {@render children?.()}
</Slot>