<script lang="ts">
    import { layoutPropDefs } from '../../props/layout.props.js';
    import { marginPropDefs } from '../../props/margin.props.js';
    import { extractProps } from '$lib/helpers/extract-props.js';
    import { containerPropDefs } from './container.props.js';
    import { styleToString } from '$lib/helpers/merge-styles.js';
    import { widthPropDefs } from '$lib/props/width.props.js';
    import { heightPropDefs } from '$lib/props/height.props.js';
    let {
        width, minWidth, maxWidth, height, minHeight, maxHeight,
        children,
        ...props
    } = $props();
    const {
        className,
        style,
        ...rest
    } = $derived(extractProps(props, containerPropDefs, layoutPropDefs, marginPropDefs));

    const { className: innerClassName, style: innerStyle } = $derived(extractProps(
      { width, minWidth, maxWidth, height, minHeight, maxHeight },
      widthPropDefs,
      heightPropDefs
    ));
</script>

<div class:rt-Container={true} class={className} {...rest} style={styleToString(style)}>
    <div class:rt-ContainerInner={true} class={innerClassName} style={styleToString(innerStyle)}>
    {@render children?.()}
    </div>
</div>