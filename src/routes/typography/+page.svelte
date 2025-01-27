<script lang="ts">
    import { Box, Flex, Grid } from "$lib/components/layout/index.js";
    import { Blockquote, Heading, Strong, Text,Code,Em ,Kbd, Link,Quote} from "$lib/components/typography/index.js";

    const sizes = ["sm", "md", "lg"];
</script>

<svelte:head>
    <title>Text</title>
</svelte:head>

<h2 class="text-lg font-bold leading-10">Typography</h2>
<h4 class="my-5 bg-slate-100 indent-2 text-base">Text</h4>
<Text>The quick brown fox jumps over the lazy dog.</Text>
<Text as="p">This is a <Strong>paragraph</Strong> element.</Text>
<Text as="label">This is a <Strong>label</Strong> element.</Text>
<Text as="div">This is a <Strong>div</Strong> element.</Text>
<Text as="span">This is a <Strong>span</Strong> element.</Text>
<Flex direction="column" gap="3">
	<Text size="1">The quick brown fox jumps over the lazy dog.</Text>
	<Text size="2">The quick brown fox jumps over the lazy dog.</Text>
	<Text size="3">The quick brown fox jumps over the lazy dog.</Text>
	<Text size="4">The quick brown fox jumps over the lazy dog.</Text>
	<Text size="5">The quick brown fox jumps over the lazy dog.</Text>
	<Text size="6">The quick brown fox jumps over the lazy dog.</Text>
	<Text size="7">The quick brown fox jumps over the lazy dog.</Text>
	<Text size="8">The quick brown fox jumps over the lazy dog.</Text>
	<Text size="9">The quick brown fox jumps over the lazy dog.</Text>
</Flex>
<Text as="p" mb="5" size="4">
    The goal of typography is to relate font size, line height, and line width in a proportional way that maximizes beauty and makes reading easier and more pleasant. The question is: What proportion(s) will give us the best results? The golden ratio is often observed in nature where beauty and utility intersect; perhaps we can use this “divine” proportion to enhance these attributes in our typography.
  </Text>
  
  <Text as="p" mb="5" size="3">
    The goal of typography is to relate font size, line height, and line width in a proportional way that maximizes beauty and makes reading easier and more pleasant. The question is: What proportion(s) will give us the best results? The golden ratio is often observed in nature where beauty and utility intersect; perhaps we can use this “divine” proportion to enhance these attributes in our typography.
  </Text>
  
  <Text as="p" size="2" color="gray">
    The goal of typography is to relate font size, line height, and line width in a proportional way that maximizes beauty and makes reading easier and more pleasant. The question is: What proportion(s) will give us the best results? The golden ratio is often observed in nature where beauty and utility intersect; perhaps we can use this “divine” proportion to enhance these attributes in our typography.
  </Text>
  <Grid align="center" columns="2" gap="5" p="3">
	<Flex direction="column">
		<Text size="3" weight="bold">
			Get started
		</Text>
		<Text color="gray" size="2">
			Start your next project in minutes
		</Text>
	</Flex>

	<Flex direction="column">
		<Text size="2" weight="bold">
			Get started
		</Text>
		<Text color="gray" size="2">
			Start your next project in minutes
		</Text>
	</Flex>

	<Flex direction="column">
		<Text size="2" weight="bold">
			Get started
		</Text>
		<Text color="gray" size="1">
			Start your next project in minutes
		</Text>
	</Flex>

	<Flex direction="column">
		<Text size="1" weight="bold">
			Get started
		</Text>
		<Text color="gray" size="1">
			Start your next project in minutes
		</Text>
	</Flex>
</Grid>
<Text weight="regular" as="div">
    The quick brown fox jumps over the lazy dog.
  </Text>
  
  <Text weight="medium" as="div">
    The quick brown fox jumps over the lazy dog.
  </Text>
  
  <Text weight="bold" as="div">
    The quick brown fox jumps over the lazy dog.
  </Text>
  <Text align="left" as="div">Left-aligned</Text>
<Text align="center" as="div">Center-aligned</Text>
<Text align="right" as="div">Right-aligned</Text>
<Flex direction="column" gap="3">
	<Text
		trim="normal"
		style={{
			background: "var(--gray-a2)",
			borderTop: "1px dashed var(--gray-a7)",
			borderBottom: "1px dashed var(--gray-a7)",
		}}
	>
		Without trim
	</Text>
	<Text
		trim="both"
		style={{
			background: "var(--gray-a2)",
			borderTop: "1px dashed var(--gray-a7)",
			borderBottom: "1px dashed var(--gray-a7)",
		}}
	>
		With trim
	</Text>
</Flex>
<Flex maxWidth="300px">
	<Text truncate>
		The goal of typography is to relate font size, line height, and line width
		in a proportional way that maximizes beauty and makes reading easier and
		more pleasant.
	</Text>
</Flex>
<Flex maxWidth="270px">
	<Text wrap="balance">
		The goal of typography is to relate font size, line height, and line width
		in a proportional way that maximizes beauty and makes reading easier and
		more pleasant.
	</Text>
</Flex>
<Flex direction="column">
	<Text color="indigo">The quick brown fox jumps over the lazy dog.</Text>
	<Text color="cyan">The quick brown fox jumps over the lazy dog.</Text>
	<Text color="orange">The quick brown fox jumps over the lazy dog.</Text>
	<Text color="crimson">The quick brown fox jumps over the lazy dog.</Text>
</Flex>
<Flex direction="column">
	<Text color="gray">The quick brown fox jumps over the lazy dog.</Text>
	<Text color="gray" highContrast>
		The quick brown fox jumps over the lazy dog.
	</Text>
</Flex>
<h4 class="my-5 bg-slate-100 indent-2 text-base">Heading</h4>
<Heading>The quick brown fox jumps over the lazy dog</Heading>
<Heading as="h1">Level 1</Heading>
<Heading as="h2">Level 2</Heading>
<Heading as="h3">Level 3</Heading>
<Flex maxWidth="300px">
	<Heading truncate>The quick brown fox jumps over the lazy dog</Heading>
</Flex>
<Flex direction="column">
	<Heading color="gray">The quick brown fox jumps over the lazy dog.</Heading>
	<Heading color="gray" highContrast>
		The quick brown fox jumps over the lazy dog.
	</Heading>
</Flex>
<h4 class="my-5 bg-slate-100 indent-2 text-base">Blockquote</h4>
<Blockquote>
	Perfect typography is certainly the most elusive of all arts. Sculpture in
	stone alone comes near it in obstinacy.
</Blockquote>
<Flex direction="column" gap="5">
	<Box maxWidth="300px">
		<Blockquote size="1">
			Perfect typography is certainly the most elusive of all arts. Sculpture in
			stone alone comes near it in obstinacy.
		</Blockquote>
	</Box>
	<Box maxWidth="350px">
		<Blockquote size="2">
			Perfect typography is certainly the most elusive of all arts. Sculpture in
			stone alone comes near it in obstinacy.
		</Blockquote>
	</Box>
	<Box maxWidth="400px">
		<Blockquote size="3">
			Perfect typography is certainly the most elusive of all arts. Sculpture in
			stone alone comes near it in obstinacy.
		</Blockquote>
	</Box>
	<Box maxWidth="450px">
		<Blockquote size="4">
			Perfect typography is certainly the most elusive of all arts. Sculpture in
			stone alone comes near it in obstinacy.
		</Blockquote>
	</Box>
	<Box maxWidth="500px">
		<Blockquote size="5">
			Perfect typography is certainly the most elusive of all arts. Sculpture in
			stone alone comes near it in obstinacy.
		</Blockquote>
	</Box>
	<Box maxWidth="550px">
		<Blockquote size="6">
			Perfect typography is certainly the most elusive of all arts. Sculpture in
			stone alone comes near it in obstinacy.
		</Blockquote>
	</Box>
	<Box maxWidth="600px">
		<Blockquote size="7">
			Perfect typography is certainly the most elusive of all arts. Sculpture in
			stone alone comes near it in obstinacy.
		</Blockquote>
	</Box>
	<Box maxWidth="650px">
		<Blockquote size="8">
			Perfect typography is certainly the most elusive of all arts. Sculpture in
			stone alone comes near it in obstinacy.
		</Blockquote>
	</Box>
	<Box maxWidth="1000px">
		<Blockquote size="9">
			Perfect typography is certainly the most elusive of all arts. Sculpture in
			stone alone comes near it in obstinacy.
		</Blockquote>
	</Box>
</Flex>
<h4 class="my-5 bg-slate-100 indent-2 text-base">Code</h4>
<Flex direction="column" gap="3" align="start">
	<Code size="1">console.log()</Code>
	<Code size="2">console.log()</Code>
	<Code size="3">console.log()</Code>
	<Code size="4">console.log()</Code>
	<Code size="5">console.log()</Code>
	<Code size="6">console.log()</Code>
	<Code size="7">console.log()</Code>
	<Code size="8">console.log()</Code>
	<Code size="9">console.log()</Code>
</Flex>
<Flex direction="column" align="start" gap="2">
	<Code variant="solid">console.log()</Code>
	<Code variant="soft">console.log()</Code>
	<Code variant="outline">console.log()</Code>
	<Code variant="ghost">console.log()</Code>
</Flex>
<Flex direction="column" align="start" gap="2">
	<Code color="indigo">console.log()</Code>
	<Code color="crimson">console.log()</Code>
	<Code color="cyan">console.log()</Code>
	<Code color="orange">console.log()</Code>
</Flex>
<Flex gap="3">
	<Flex direction="column" align="start" gap="2">
		<Code color="gray" variant="solid">
			console.log()
		</Code>
		<Code color="gray" variant="soft">
			console.log()
		</Code>
		<Code color="gray" variant="outline">
			console.log()
		</Code>
		<Code color="gray" variant="ghost">
			console.log()
		</Code>
	</Flex>

	<Flex direction="column" align="start" gap="2">
		<Code color="gray" variant="solid" highContrast>
			console.log()
		</Code>
		<Code color="gray" variant="soft" highContrast>
			console.log()
		</Code>
		<Code color="gray" variant="outline" highContrast>
			console.log()
		</Code>
		<Code color="gray" variant="ghost" highContrast>
			console.log()
		</Code>
	</Flex>
</Flex>
<Flex direction="column" gap="2" align="start">
	<Code weight="regular">console.log()</Code>
	<Code weight="bold">console.log()</Code>
</Flex>
<Flex maxWidth="200px">
	<Code truncate>linear-gradient(red, orange, yellow, green, blue);</Code>
</Flex>
<h4 class="my-5 bg-slate-100 indent-2 text-base">Em</h4>
<Text>
	We <Em>had</Em> to do something about it.
</Text>
<Flex maxWidth="300px">
	<Em truncate>
		The goal of typography is to relate font size, line height, and line width
		in a proportional way that maximizes beauty and makes reading easier and
		more pleasant.
	</Em>
</Flex>
<h4 class="my-5 bg-slate-100 indent-2 text-base">Kbd</h4>
<Kbd>Shift + Tab</Kbd>
<Flex direction="column" align="start" gap="3">
	<Kbd size="1">Shift + Tab</Kbd>
	<Kbd size="2">Shift + Tab</Kbd>
	<Kbd size="3">Shift + Tab</Kbd>
	<Kbd size="4">Shift + Tab</Kbd>
	<Kbd size="5">Shift + Tab</Kbd>
	<Kbd size="6">Shift + Tab</Kbd>
	<Kbd size="7">Shift + Tab</Kbd>
	<Kbd size="8">Shift + Tab</Kbd>
	<Kbd size="9">Shift + Tab</Kbd>
</Flex>
<h4 class="my-5 bg-slate-100 indent-2 text-base">Link</h4>
<Link href="#">Sign up</Link>
<Flex direction="column" gap="3">
	<Link href="#" size="1">
		Sign up
	</Link>
	<Link href="#" size="2">
		Sign up
	</Link>
	<Link href="#" size="3">
		Sign up
	</Link>
	<Link href="#" size="4">
		Sign up
	</Link>
	<Link href="#" size="5">
		Sign up
	</Link>
	<Link href="#" size="6">
		Sign up
	</Link>
	<Link href="#" size="7">
		Sign up
	</Link>
	<Link href="#" size="8">
		Sign up
	</Link>
	<Link href="#" size="9">
		Sign up
	</Link>
</Flex>
<Flex direction="column">
	<Link href="#" weight="regular">
		Sign up
	</Link>
	<Link href="#" weight="medium">
		Sign up
	</Link>
	<Link href="#" weight="bold">
		Sign up
	</Link>
</Flex>
<Flex direction="column">
	<Link href="#" color="indigo">
		Sign up
	</Link>
	<Link href="#" color="cyan">
		Sign up
	</Link>
	<Link href="#" color="orange">
		Sign up
	</Link>
	<Link href="#" color="crimson">
		Sign up
	</Link>
</Flex>
<Flex direction="column">
	<Link href="#" color="gray">
		Sign up
	</Link>
	<Link href="#" color="gray" highContrast>
		Sign up
	</Link>
</Flex>
<Flex direction="column">
	<Link href="#" underline="hover">
		Sign up
	</Link>
	<Link href="#" underline="always">
		Sign up
	</Link>
</Flex>
<h4 class="my-5 bg-slate-100 indent-2 text-base">Quote</h4>
<Text>
	His famous quote,{" "}
	<Quote>Styles come and go. Good design is a language, not a style</Quote>,
	elegantly summs up Massimo’s philosophy of design.
</Text>
<Flex maxWidth="300px">
	<Quote truncate>
		The goal of typography is to relate font size, line height, and line width
		in a proportional way that maximizes beauty and makes reading easier and
		more pleasant.
	</Quote>
</Flex>

<h4 class="my-5 bg-slate-100 indent-2 text-base">Strong</h4>
<Text>
	The most important thing to remember is, <Strong>stay positive</Strong>.
</Text>
<Flex maxWidth="300px">
	<Strong truncate>
		The goal of typography is to relate font size, line height, and line width
		in a proportional way that maximizes beauty and makes reading easier and
		more pleasant.
	</Strong>
</Flex>