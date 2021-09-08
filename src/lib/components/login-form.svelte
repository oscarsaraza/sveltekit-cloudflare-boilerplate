<script>
	import { Button, Form, FormGroup, TextInput } from 'carbon-components-svelte';
	import { createForm } from 'felte';
	import { login } from '$lib/state';

	const { data, handleSubmit } = createForm({ initialValues: { email: '' }, onSubmit: login });
</script>

<Form on:submit={handleSubmit}>
	<FormGroup>
		<TextInput labelText="User name" placeholder="Enter user name..." bind:value={$data.email} />
	</FormGroup>
	<br />
	<Button type="submit">Iniciar</Button>
</Form>
