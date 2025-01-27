<script module lang="ts">
    import  type {FlexOwnProps, LayoutProps, MarginProps} from './types.js';
    import type { Snippet } from 'svelte';
    interface CommonFlexProps extends MarginProps, LayoutProps, FlexOwnProps {}
    type FlexProps = CommonFlexProps & {
        className?:ClassValue[];
        children:Snippet;
    }
</script>

<script lang="ts">
    import clsx, { type ClassValue } from 'clsx';
    import { layoutPropDefs } from '../../props/layout.props.js';
    import { marginPropDefs } from '../../props/margin.props.js';
    import { extractProps } from '$lib/helpers/extract-props.js';
    import { flexPropDefs } from './flex.props.js';
    import { styleToString } from '$lib/helpers/merge-styles.js';
    let {
        children,
        ...flexProps
    } = $props();
    const {
        as = "div",
        className,
        style,
        ...rest
    } = $derived(extractProps(flexProps, flexPropDefs, layoutPropDefs, marginPropDefs));

</script>

<svelte:element this="{as}" class:rt-Flex={true} class={className} {...rest} style={styleToString(style)}>
    {@render children?.()}
</svelte:element>