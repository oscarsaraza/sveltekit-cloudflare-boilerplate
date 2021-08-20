<script>
	import { Accordion, AccordionItem } from 'carbon-components-svelte';
	import { Add32 } from 'carbon-icons-svelte';
	let text = 'Testing js';
</script>

<h1>Start page</h1>
<Accordion>
	<AccordionItem title="Item 1"><p>{text} 1</p></AccordionItem>
	<AccordionItem title="Item 2"><p>{text} 2</p></AccordionItem>
	<AccordionItem title="Item 3"><p>{text} 3</p></AccordionItem>
</Accordion>

<a href="/index2"><Add32 /></a>

<style>
	@import 'carbon-components-svelte/css/g10.css';
</style>
