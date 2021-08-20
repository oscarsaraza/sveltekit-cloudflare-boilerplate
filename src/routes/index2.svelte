<script>
	import { Button, DatePicker, DatePickerInput } from 'carbon-components-svelte';
	let text = 'Testing js';
</script>

<h1>Start page 2</h1>

<DatePicker datePickerType="range" on:change dateFormat="d/m/yy">
	<DatePickerInput placeholder="Inicio" />
	<DatePickerInput placeholder="Fin" />
</DatePicker>

<Button>Test</Button>

<style>
	@import 'carbon-components-svelte/css/g10.css';
</style>
