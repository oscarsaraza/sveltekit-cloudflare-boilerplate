<script>
	import { Grid, Row, Column, Tile } from 'carbon-components-svelte';
	import TestForm from '$lib/components/test-form.svelte';
</script>

<Grid>
	<Row>
		<Column>
			<Tile>
				<TestForm />
			</Tile>
		</Column>
	</Row>
</Grid>

<style>
	@import 'carbon-components-svelte/css/g10.css';
</style>
