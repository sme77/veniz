<script lang="ts">
	import { onMount } from 'svelte';

	import { Button, Div } from '$lib';

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

	/* <h1>inverted</h1> */
	/* <Button inverted>inverted</Button> */
</script>

<Div background>
	<Button sm on:click={handleDirection}>{dir}</Button>
	<Button sm on:click={handleTheme}>{theme}</Button>

	<h1>Welcome to SvelteKit</h1>
	<Div background>
		<p>basic</p>
		<Button base>base</Button>
		<Button primary>primary</Button>
		<Button success>success</Button>
		<Button warning>warning</Button>
		<Button danger>danger</Button>
		<Button info>info</Button>
		<Button link>link</Button>
	</Div>
	<Div background>
		<p>light</p>
		<Button light base>base</Button>
		<Button light primary>primary</Button>
		<Button light success>success</Button>
		<Button light warning>warning</Button>
		<Button light danger>danger</Button>
		<Button light info>info</Button>
		<Button light link>link</Button>
	</Div>

	<Div background>
		<p>outlinded</p>
		<Button outlined base>base</Button>
		<Button outlined primary>primary</Button>
		<Button outlined success>success</Button>
		<Button outlined warning>warning</Button>
		<Button outlined danger>danger</Button>
		<Button outlined info>info</Button>
		<Button outlined link>link</Button>
	</Div>

	<Div background>
		<p>ghost</p>
		<Button ghost base>base</Button>
		<Button ghost primary>primary</Button>
		<Button ghost success>success</Button>
		<Button ghost warning>warning</Button>
		<Button ghost danger>danger</Button>
		<Button ghost info>info</Button>
		<Button ghost link>link</Button>
	</Div>

	<Div background>
		<p>dark</p>
		<Button dark base>base</Button>
		<Button dark primary>primary</Button>
		<Button dark success>success</Button>
		<Button dark warning>warning</Button>
		<Button dark danger>danger</Button>
		<Button dark info>info</Button>
		<Button dark link>link</Button>
	</Div>

	<Div background>
		<p>sizes</p>
		<Button xs>base</Button>
		<Button sm>primary</Button>
		<Button md>success</Button>
		<Button lg>warning</Button>
		<Button xl>danger</Button>
	</Div>

	<Div background>
		<p>other</p>
		<Button block>block</Button>
	</Div>
</Div>
