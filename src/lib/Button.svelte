<script lang="ts">
	export let name: string = '';
</script>

<button {name}>
	<slot />
	<h1>{name}</h1>
</button>
