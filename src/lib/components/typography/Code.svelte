<script lang="ts">
    import { marginPropDefs } from '../../props/margin.props.js';
    import { extractProps } from '$lib/helpers/extract-props.js';
    import { codePropDefs } from './code.props.js';
    import Slot from '../slot/Slot.svelte';
    import clsx from 'clsx';
    let {
        ref=$bindable(),
        children,
        ...props
    } = $props();
    const {
        asChild = undefined,
        className,
        color,
        ...rest
    } = $derived(extractProps(props, codePropDefs, marginPropDefs));
    const resolvedColor = $derived(props.variant === 'ghost' ? color || undefined : color);
</script>

<Slot
    as="code"
      {asChild}
      data-accent-color={resolvedColor}
      {...rest}
      ref={ref}
      class={clsx('rt-reset', 'rt-Code', className)}
    >
        {@render children?.()}
</Slot>