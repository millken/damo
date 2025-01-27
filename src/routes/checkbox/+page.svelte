<script lang="ts">
    import { Checkbox, CheckboxGroup } from "$lib/index.js";

    const sizes = ["sm", "md", "lg"];
</script>

<svelte:head>
    <title>Checkbox</title>
</svelte:head>

<h2 class="text-lg font-bold leading-10">Checkbox</h2>

<h4 class="my-5 bg-slate-100 indent-2 text-base">Base</h4>

<div class="flex flex-row gap-5">
    <CheckboxGroup name="a" onchange={(v) => console.log("radio a:", v)}>
        {#each [{ label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" }, { label: "D", value: "D" }, { label: "E", value: "E" }] as item}
            <Checkbox value={item.value}>
                {item.label}
            </Checkbox>
        {/each}
    </CheckboxGroup>
</div>

<h4 class="my-5 bg-slate-100 indent-2 text-base">Disable</h4>

<div class="flex flex-row gap-5">
    <CheckboxGroup name="a" onchange={(v) => console.log("radio a:", v)}>
        {#each [{ label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C", disabled: true }, { label: "D", value: "D" }, { label: "E", value: "E" }] as item}
            <Checkbox value={item.value} disabled={item.disabled}>
                {item.label}
            </Checkbox>
        {/each}
    </CheckboxGroup>
</div>

<h4 class="my-5 bg-slate-100 indent-2 text-base">Default Checked</h4>

<div class="flex flex-row gap-5">
    <CheckboxGroup name="a" value={["C", "D"]} onchange={(v) => console.log("radio a:", v)}>
        {#each [{ label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C", disabled: true }, { label: "D", value: "D" }, { label: "E", value: "E" }] as item}
            <Checkbox value={item.value} disabled={item.disabled}>
                {item.label}
            </Checkbox>
        {/each}
    </CheckboxGroup>
</div>

<h4 class="my-5 bg-slate-100 indent-2 text-base">Radius</h4>

<div class="flex flex-col gap-5">
    {#each ["sm", "md", "lg", "full"] as radius}
        <div class="flex flex-row gap-5">
            <CheckboxGroup name="a" value={["C", "D"]} onchange={(v) => console.log("radio a:", v)}>
                {#each [{ label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" }, { label: "D", value: "D" }, { label: "E", value: "E" }] as item}
                    <Checkbox value={item.value} radius={radius as any}>
                        {item.label}
                    </Checkbox>
                {/each}
            </CheckboxGroup>
        </div>
    {/each}
</div>
