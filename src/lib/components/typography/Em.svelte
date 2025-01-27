<script lang="ts">
    import { extractProps } from '$lib/helpers/extract-props.js';
    import { emPropDefs } from './em.props.js';
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
    } = $derived(extractProps(props, emPropDefs));
</script>

<Slot
    as="em"
      {asChild}
      {...rest}
      class={clsx('rt-Em', className)}
    >
        {@render children?.()}
</Slot>