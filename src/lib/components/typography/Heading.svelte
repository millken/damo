<script lang="ts">
    import { extractProps } from '$lib/helpers/extract-props.js';
    import { headingPropDefs } from './heading.props.js';
    import { styleToString } from '$lib/helpers/merge-styles.js';
    import { marginPropDefs } from '$lib/props/margin.props.js';
    let {
        ref=$bindable(),
        children,
        ...props
    } = $props();
    const {
        as = "h1",
        className,
        style,
        color,
        ...rest
    } = $derived(extractProps(props, headingPropDefs, marginPropDefs));

</script>

<svelte:element this="{as}" bind:this={ref} data-accent-color={color} class:rt-Heading={true} class={className} {...rest} style={styleToString(style)}>
    {@render children?.()}
</svelte:element>