import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-cloudflare-workers';
import { optimizeCss, optimizeImports, icons, pictograms } from 'carbon-preprocess-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess(), optimizeImports(), icons(), pictograms()],
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter(),
		// TODO: optimizeCss exclude date range picker styles
		// vite: { plugins: [process.env.NODE_ENV === 'production' && optimizeCss()] }
	}
};

export default config;
