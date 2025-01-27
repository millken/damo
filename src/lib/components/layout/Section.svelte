<script lang="ts">
    import { layoutPropDefs } from '../../props/layout.props.js';
    import { marginPropDefs } from '../../props/margin.props.js';
    import { extractProps } from '$lib/helpers/extract-props.js';
    import { sectionPropDefs } from './section.props.js';
    import { styleToString } from '$lib/helpers/merge-styles.js';
    let {
        children,
        ...props
    } = $props();
    const {
        className,
        style,
        ...rest
    } = $derived(extractProps(props, sectionPropDefs, layoutPropDefs, marginPropDefs));

</script>

<section class:rt-Section={true} class={className} {...rest} style={styleToString(style)}>
    {@render children?.()}
</section>