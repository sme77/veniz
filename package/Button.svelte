<script >export let name = '';
</script>

<button {name}>
	<slot />
	<h1>{name}</h1>
</button>
