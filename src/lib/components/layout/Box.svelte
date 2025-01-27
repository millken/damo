<script lang="ts">
    import { layoutPropDefs } from '../../props/layout.props.js';
    import { marginPropDefs } from '../../props/margin.props.js';
    import { extractProps } from '$lib/helpers/extract-props.js';
    import { boxPropDefs } from './box.props.js';
    import { styleToString } from '$lib/helpers/merge-styles.js';
    let {
        children,
        ...props
    } = $props();
    const {
        as = "div",
        className,
        style,
        ...rest
    } = $derived(extractProps(props, boxPropDefs, layoutPropDefs, marginPropDefs));

</script>

<svelte:element this="{as}"  class:rt-Box={true} class={className} {...rest} style={styleToString(style)}>
    {@render children?.()}
</svelte:element>