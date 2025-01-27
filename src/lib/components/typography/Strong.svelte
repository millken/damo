<script lang="ts">
    import { extractProps } from '$lib/helpers/extract-props.js';
    import { strongPropDefs } from './strong.props.js';
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
    } = $derived(extractProps(props, strongPropDefs));
</script>

<Slot
    as="strong"
      {asChild}
      {...rest}
      class={clsx('rt-Strong', className)}
    >
        {@render children?.()}
</Slot>