<script lang="ts">
    import { Box, Flex, Grid } from "$lib/components/layout/index.js";
    import { Blockquote, Heading, Strong, Text,Code,Em ,Kbd, Link,Quote, Title,Caption, Display, List} from "$lib/components/typography/index.js";

    const sizes = ["sm", "md", "lg"];
</script>

<svelte:head>
    <title>Text</title>
</svelte:head>

<h2 class="text-lg font-bold leading-10">Typography</h2>

<h4 class="my-5 bg-slate-100 indent-2 text-base">Title</h4>
<Title size="3xl">Title</Title>
<Title as="h4" size="2xl" weight="bold" align="right">A Title</Title>
<h4 class="my-5 bg-slate-100 indent-2 text-base">Caption</h4>
<Caption size="xs">Creator of Tailus</Caption>
<Caption as="em" size="base" weight="bold" align="right">Title</Caption>
<h4 class="my-5 bg-slate-100 indent-2 text-base">Display</h4>
<Display size="4xl">A Display</Display>
<h4 class="my-5 bg-slate-100 indent-2 text-base">Text</h4>
<Text>
	Tailus Themer is a Tailwind CSS {" "}
	<Text as="strong">Styling Library</Text> {" "}
	for Building Modern, Consistent and Accessible {" "}
	<Text as="em">Web UIs</Text> 
</Text>
<h4 class="my-5 bg-slate-100 indent-2 text-base">List</h4>

<List as="ol" type="decimal">
	<li>Modern</li>
	<li>Customizable</li>
	<li>Responsive</li>
	<li>Accessible</li>
</List>

<h4 class="my-5 bg-slate-100 indent-2 text-base">Link</h4>

<Link href="https://tailwindcss.com/docs" target="_blank">Tailwind CSS</Link>

<h4 class="my-5 bg-slate-100 indent-2 text-base">Code</h4>
<div>
	<Code>normal</Code>
	<Code intent="primary">primary</Code>
	<Code intent="secondary">secondary</Code>
	<Code intent="accent">accent</Code>
	<Code intent="gray">gray</Code>
	<Code intent="neutral">neutral</Code>
</div>

<h4 class="my-5 bg-slate-100 indent-2 text-base">Kbd</h4>
<Kbd>Ctrl</Kbd>