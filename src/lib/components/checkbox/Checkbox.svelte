<script lang="ts" module>
    import { onMount, getContext, type Snippet } from "svelte";
    import { tv, type VariantProps } from "tailwind-variants";
    import { Check } from "$lib/components/icons/index.js";
    import { twMerge } from "tailwind-merge";
    import { type CheckboxContext } from "./CheckboxGroup.svelte";

    const checkboxVariants = tv({
        base: "relative flex items-center justify-center w-4 h-4 cursor-pointer box-content bg-white border-2 border-solid transition-all overflow-hidden",
        variants: {
            disabled: {
                true: "cursor-not-allowed",
                false: "",
            },
            focus: {
                true: "",
                false: "",
            },
            checked: {
                true: "",
                false: "",
            },
            radius: {
                sm: "rounded-sm",
                md: "rounded-md",
                lg: "rounded-lg",
                full: "rounded-full",
            },
        },
        compoundVariants: [
            {
                focus: true,
                disabled: false,
                class: "ring ring-primary-200",
            },
            {
                disabled: false,
                checked: true,
                class: "bg-primary-600 border-primary-600 text-white",
            },
            {
                disabled: false,
                checked: false,
                class: "border-slate-300 hover:border-slate-600",
            },
            {
                disabled: true,
                checked: true,
                class: "bg-primary-300 border-primary-300 text-white",
            },
            {
                disabled: true,
                checked: false,
                class: "bg-slate-50 border-slate-200",
            },
        ],
        defaultVariants: {
            radius: "md",
        },
    });

    type Radius = VariantProps<typeof checkboxVariants>["radius"];

    type CheckboxProps = {
        ref?: { (el: HTMLElement): void };
        value: string | number;
        class?: string;
        radius?: Radius;
        disabled?: boolean;
        checked?: boolean;
        children?: Snippet;
        onchange?: { (checked: boolean): void };
    };
</script>

<script lang="ts">
    let { ref, class: className, value: defaultValue, checked: defaultChecked, radius, disabled, children, onchange }: CheckboxProps = $props();

    const context = getContext<CheckboxContext>("checkbox");

    let focus = $state(false);
    let checked = $state(context ? context.value && context.value.indexOf(defaultValue) > -1 : !!defaultChecked);

    function onChange(e: Event & { currentTarget: HTMLInputElement }) {
        checked = e.currentTarget.checked;

        // first context
        if (context) {
            let value: Array<string | number> = [];

            if (context.value) {
                value = context.value;
            }

            if (defaultValue !== undefined) {
                if (checked) {
                    value.push(defaultValue);
                } else {
                    const index = value.indexOf(defaultValue);

                    if (index > -1) {
                        value.splice(index, 1);
                    }
                }
            }

            context.value = value;
        }

        onchange?.(checked);
    }

    function onFocus(_: Event) {
        focus = true;
    }

    function onBlur(e: Event) {
        if (!el.contains(e.target as HTMLButtonElement)) {
            focus = false;
        }
    }

    let el: HTMLElement;

    onMount(() => {
        ref?.(el);
    });
</script>

<label class={twMerge("mr-3 inline-flex h-fit w-fit flex-row items-center gap-2 align-top leading-none", className)}>
    <span bind:this={el} class={checkboxVariants({ radius, focus, checked, disabled })}>
        <input bind:checked class="absolute left-0 top-0 -z-10 h-4 w-4" type="checkbox" name={context ? context.name : undefined} value={defaultValue} {disabled} onchange={onChange} onclick={onFocus} />

        {#if checked}
            <Check size={16} class="pointer-events-none" />
        {/if}
    </span>

    {@render children?.()}
</label>

<svelte:window onmousedown={onBlur} />
