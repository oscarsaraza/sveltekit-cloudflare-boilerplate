<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch, session, context }) {
		// const url = `/blog/${page.params.slug}.json`;
		const url = `/test.json`;
		const res = await fetch(url);
		if (res.ok) return { props: { article: await res.json() } };
		return { status: res.status, error: new Error(`Could not load ${url}`) };
	}
</script>

<script>
	import { Button, Column, Grid, Row, Tile } from 'carbon-components-svelte';
	import LoginForm from '$lib/components/login-form.svelte';
	import { user, logout } from '$lib/state';

	export let article;
</script>

<svelte:head>
	<title>Start page</title>
</svelte:head>

<Grid>
	<Row>
		<Column>
			<Tile>
				<h1>Start page</h1>
				<div>
					<strong>{article.name}</strong>
				</div>
				<a href="/index2">Form test</a>

				{#if $user?.email}
					<h2>{$user.email}</h2>
					<Button on:click={logout} size="small">Logout</Button>
				{:else if $user?.logging}
					<p>... starting ...</p>
				{:else}
					<LoginForm />
				{/if}
			</Tile>
		</Column>
	</Row>
</Grid>

<style>
	@import 'carbon-components-svelte/css/g10.css';
</style>
