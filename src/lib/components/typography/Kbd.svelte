<script lang="ts">
    import { marginPropDefs } from '../../props/margin.props.js';
    import { extractProps } from '$lib/helpers/extract-props.js';
    import { kbdPropDefs } from './kbd.props.js';
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
    } = $derived(extractProps(props, kbdPropDefs, marginPropDefs));
</script>

<Slot
    as="kbd"
      {asChild}
      {...rest}
      class={clsx('rt-reset', 'rt-Kbd', className)}
    >
        {@render children?.()}
</Slot>