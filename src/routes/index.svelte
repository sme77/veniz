<script lang="ts">
	import { onMount } from 'svelte';

	import { Button } from '../lib';

	let dir: 'rtl' | 'ltr' = 'ltr';
	let theme = '';

	const handleDirection = () => {
		const currentDir = document.querySelector('BODY').getAttribute('dir');
		dir = currentDir === 'ltr' ? 'rtl' : 'ltr';
		document.querySelector('BODY').setAttribute('dir', dir);
	};

	const handleTheme = () => {
		const currentTheme = document.querySelector('HTML').classList[0];
		theme = currentTheme === 'light' ? 'dark' : 'light';
		document.querySelector('HTML').setAttribute('class', theme);
	};

	onMount(() => {
		theme = document.querySelector('HTML').classList[0] || 'light';
	});
</script>

<Button sm on:click={handleDirection}>{dir}</Button>
<Button sm on:click={handleTheme}>{theme}</Button>

<h1>Welcome to SvelteKit</h1>
<Button>base</Button>
<Button inverted>base</Button>
