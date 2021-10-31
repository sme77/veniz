<script lang="ts">
	import Container from '../Container/index.svelte';

	export let inline: boolean = false;
</script>

<Container addClass={`${inline ? 'w-full inline-flex gap-4 items-baseline' : ''}`}>
	<slot />
</Container>
