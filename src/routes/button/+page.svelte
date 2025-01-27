<script lang="ts">
    import { Flex } from "$lib/components/layout/index.js";
    import { Button } from "$lib/index.js";

    const sizes = ["1", "2", "3", "4"];
    const variants = ["classic","solid","soft","surface","outline","ghost"];
</script>

<svelte:head>
    <title>Button</title>
</svelte:head>

<h2 class="text-lg font-bold leading-10">Button</h2>

<div class="mt-5 space-y-4">
    <h4 class="my-3 bg-slate-100 indent-2 text-base">Default</h4>

    <h4 class="my-3 bg-slate-100 indent-2 text-base">Size</h4>

    <div class="flex flex-wrap gap-2">
        <Button size="1" variant="soft">
            Edit profile
        </Button>
        <Button size="2" variant="soft">
            Edit profile
        </Button>
        <Button size="3" variant="soft">
            Edit profile
        </Button>
        {#each sizes as size}
            <Button size={size as any}>{size}</Button>
        {/each}
    </div>
    <h4 class="my-3 bg-slate-100 indent-2 text-base">Variant</h4>
    <div class="flex flex-wrap gap-2">
        {#each variants as variant}
            <Button variant={variant as any}>{variant}</Button>
        {/each}
    </div>
    <h4 class="my-3 bg-slate-100 indent-2 text-base">Color</h4>
    <div class="flex flex-wrap gap-2">
        <Button color="indigo" variant="soft">
            Edit profile
        </Button>
        <Button color="cyan" variant="soft">
            Edit profile
        </Button>
        <Button color="orange" variant="soft">
            Edit profile
        </Button>
        <Button color="crimson" variant="soft">
            Edit profile
        </Button>
    </div>
    <Flex direction="column" gap="3">
        <Flex gap="3" m={{sm:"-1",lg:"1"}}>
            <Button color="gray" variant="classic">
                Edit profile
            </Button>
            <Button color="gray" variant="solid">
                Edit profile
            </Button>
            <Button color="gray" variant="soft">
                Edit profile
            </Button>
            <Button color="gray" variant="surface">
                Edit profile
            </Button>
            <Button color="gray" variant="outline">
                Edit profile
            </Button>
        </Flex>
        <Flex gap="3" p={{sm:"1",lg:"2"}}>
            <Button color="gray" variant="classic" highContrast>
                Edit profile
            </Button>
            <Button color="gray" variant="solid" highContrast>
                Edit profile
            </Button>
            <Button color="gray" variant="soft" highContrast>
                Edit profile
            </Button>
            <Button color="gray" variant="surface" highContrast>
                Edit profile
            </Button>
            <Button color="gray" variant="outline" highContrast>
                Edit profile
            </Button>
        </Flex>
    </Flex>
    <h4 class="my-3 bg-slate-100 indent-2 text-base">Disabled</h4>
    <div class="flex flex-wrap gap-2">
        <Button disabled>Disabled</Button>
        <Button disabled variant="soft">Disabled</Button>
        <Button disabled variant="surface">Disabled</Button>
        <Button disabled variant="outline">Disabled</Button>
        <Button disabled variant="ghost">Disabled</Button>
    </div>
    <Button m="4"> m 4</Button>
<Button m="100px">m 100px</Button>
<Button m={{ sm: '6', lg: '9' }}>m sm: '6', lg: '9' </Button>
<Button><Button asChild m="3"><b>aaa</b></Button></Button>
</div>
