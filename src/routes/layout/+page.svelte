<script lang="ts">
    import { Box, Container, Flex, Grid, Section } from "$lib/components/layout/index.js";
    import { DecorativeBox } from "$lib/components/snippets/index.js";
    import { Layout, Side, Header, Content, Button } from "$lib/index.js";

    let collapsible = $state(false);
</script>

<svelte:head>
    <title>Layout</title>
</svelte:head>

<h2 class="text-lg font-bold leading-10">Layout</h2>

<h4 class="my-5 bg-slate-100 indent-2 text-base">Box</h4>
<Box width="64px" height="64px" top="10px" bottom="20px">
	<DecorativeBox />
</Box>
<h4 class="my-5 bg-slate-100 indent-2 text-base">Grid</h4>
<Grid columns="3" gap="3" rows="repeat(2, 64px)" width="auto">
	<DecorativeBox />
	<DecorativeBox />
	<DecorativeBox />
	<DecorativeBox />
	<DecorativeBox />
	<DecorativeBox />
</Grid>
<Grid columns={{ initial: "1", md: "2" }} gap="3" width="auto">
	<Box height="64px">
		<DecorativeBox />
	</Box>
	<Box height="64px">
		<DecorativeBox />
	</Box>
</Grid>

<h4 class="my-5 bg-slate-100 indent-2 text-base">Flex</h4>
<Flex gap="3">
	<Box width="64px" height="64px">
		<DecorativeBox />
	</Box>
	<Box width="64px" height="64px">
		<DecorativeBox />
	</Box>
	<Box width="64px" height="64px">
		<DecorativeBox />
	</Box>
	<Box width="64px" height="64px">
		<DecorativeBox />
	</Box>
	<Box width="64px" height="64px">
		<DecorativeBox />
	</Box>
</Flex>
<h4 class="my-5 bg-slate-100 indent-2 text-base">Container</h4>
<Box style={{ background: "var(--gray-a2)", borderRadius: "var(--radius-3)" }}>
	<Container size="1">
		<DecorativeBox>
			<Box py="9" />
		</DecorativeBox>
	</Container>
</Box>

<h4 class="my-5 bg-slate-100 indent-2 text-base">Section</h4>
<Box
	py="8"
	style={{ backgroundColor: "var(--gray-a2)", borderRadius: "var(--radius-3)" }}
>
	<DecorativeBox asChild>
		<Section size="2" />
	</DecorativeBox>
</Box>
<Layout style="height:20%;" class="w-full" layout="col">
    <Header class="bg-slate-900"></Header>
    <Content class="bg-slate-100"></Content>
</Layout>

<br />

<Layout style="height:20%;" class="w-full" layout="col">
    <Header class="bg-slate-900"></Header>

    <Layout>
        <Side class="bg-slate-600"></Side>
        <Content class="bg-slate-100"></Content>
    </Layout>
</Layout>

<br />

<Layout style="height:20%;" class="w-full" layout="col">
    <Header class="bg-slate-900"></Header>

    <Layout>
        <Content class="bg-slate-100"></Content>
        <Side class="bg-slate-600"></Side>
    </Layout>
</Layout>

<br />

<Layout style="height:20%;" class="w-full">
    <Side class="bg-slate-900" />

    <Layout layout="col">
        <Header class="bg-slate-600"></Header>
        <Content class="bg-slate-100"></Content>
    </Layout>
</Layout>

<br />

<h4 class="my-5 bg-slate-100 indent-2 text-base">Collapsible Side</h4>

<Layout style="height:20%;" class="w-full">
    <Side class={`bg-slate-900${collapsible ? "" : " w-16"}`} />

    <Layout layout="col">
        <Header class="bg-slate-600">
            <Button onclick={() => (collapsible = !collapsible)}>Collapsible</Button>
        </Header>
        <Content class="bg-slate-100"></Content>
    </Layout>
</Layout>
