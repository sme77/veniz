<script lang="ts">
	/* import { onMount } from 'svelte'; */

	import {
		H1,
		Button,
		Article,
		H3,
		P,
		Container,
		Form,
		FormElement,
		Input,
		Label,
		Navbar
	} from '$lib';

	/* let dir: 'rtl' | 'ltr' = 'ltr'; */
	/* let theme = ''; */

	/* const handleDirection = () => { */
	/* 	const currentDir = document.querySelector('BODY').getAttribute('dir'); */
	/* 	dir = currentDir === 'ltr' ? 'rtl' : 'ltr'; */
	/* 	document.querySelector('BODY').setAttribute('dir', dir); */
	/* }; */

	/* const handleTheme = () => { */
	/* 	const currentTheme = document.querySelector('HTML').classList[0]; */
	/* 	theme = currentTheme === 'light' ? 'dark' : 'light'; */
	/* 	document.querySelector('HTML').setAttribute('class', theme); */
	/* }; */

	/* onMount(() => { */
	/* 	theme = document.querySelector('HTML').classList[0] || 'light'; */
	/* }); */

	/* <Article xl> */
	/* 	<H1>HOME</H1> */
	/* 	<H3>spider</H3> */
	/* 	<P>no way man</P> */
	/* </Article> */
</script>

<Container background page>
	<Navbar>
		<Container addClass="shadow-lg p-5">
			<Button success light ghost>Home</Button>
		</Container>
	</Navbar>
	<Container addClass="p-8">
		<h1>asdf</h1>

		<Form>
			<FormElement>
				<Label _for="name">name</Label>
				<Input type="text" id="name" outlined />
			</FormElement>
		</Form>
	</Container>
</Container>
