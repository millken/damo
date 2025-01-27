<script module lang="ts">
    import { type Snippet, onMount } from "svelte";

    import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";

    type ButtonProps = {
        href?: string;
        target?: "_self" | "_blank" | "_parent" | "_top";
        size?: Size;
        color?: AccentColor;
        variant?: Variant;
        radius?: Radius;
        highContrast?: boolean;
        onclick?: { (): void };
        ref?: { (el: HTMLElement): void };
        id?: string;
        className?: ClassValue[];
        loading?: boolean;
        disabled?: boolean;
        children: Snippet;
    };
    //     type BaseButtonOwnProps = GetPropDefTypes<typeof baseButtonPropDefs>;
    // interface BaseButtonProps
    //   extends  MarginProps, BaseButtonOwnProps {
    //     className?: object |string;
    //     ref?: (el: HTMLElement) => void;
    //     children: Snippet;
    //   }
    // type ButtonProps = baseButtonPropDefs &
    //     (HTMLButtonAttributes & HTMLAnchorAttributes) & {
    //         ref?: (el: HTMLElement) => void;
    //         children: Snippet;
    //     };
</script>

<script lang="ts">
    import { marginPropDefs } from "$lib/props/margin.props.js";
    import { baseButtonPropDefs } from "./base-button.props.js";
    import clsx, { type ClassValue } from "clsx";
    import { extractProps } from "$lib/helpers/extract-props.js";
    import type { AccentColor, Radius, Size, Variant } from "$lib/internal/index.js";
    import { styleToString } from "$lib/helpers/merge-styles.js";

    let { ref = undefined, children, ...props } = $props();

    const { className, style, asChild, color, radius, disabled = props?.loading, ...rest } = $derived(extractProps(props, baseButtonPropDefs, marginPropDefs));
    let el: HTMLElement | undefined = $state();
    $inspect(asChild)
    onMount(() => {
        ref?.(el);
    });
</script>

{#if asChild}
{@render children(props)}
{:else}
<button data-disabled={disabled} data-accent-color={color} data-radius={radius} bind:this={el} class={clsx("rt-reset", "rt-BaseButton", className, "rt-Button")} style={styleToString(style)} {...rest}>
    {@render children()}
</button>
{/if}