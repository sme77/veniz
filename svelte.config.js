import preprocess from 'svelte-preprocess';
import node from '@sveltejs/adapter-node';
import WindiCSS from 'vite-plugin-windicss/dist/index.mjs';

const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: node({ env: { port: process.env.PORT } }),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			plugins: [WindiCSS()]
		}
	}
};

export default config;
