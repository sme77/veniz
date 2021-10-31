<script lang="ts">
	export let addClass: string = '';

	export let disabled: boolean = false;
	export let onhold: boolean = false;

	export let base: boolean = false;
	export let primary: boolean = false;
	export let success: boolean = false;
	export let warning: boolean = false;
	export let danger: boolean = false;
	export let info: boolean = false;

	export let outlined: boolean = false;
	export let light: boolean = false;
	export let dark: boolean = false;
	export let ghost: boolean = false;

	$: {
		if (!outlined && !light && !dark) ghost = true;
	}

	let color = '';

	$: {
		color = base
			? 'base'
			: primary
			? 'primary'
			: success
			? 'success'
			: warning
			? 'warning'
			: danger
			? 'danger'
			: info
			? 'info'
			: 'base';
	}
</script>

<h2
	class={`
			${color} 
			${addClass}
		`}
	class:light
	class:dark
	class:outlined
	class:ghost
	on:click
	on:focus
	on:mouseover
	on:mouseenter
	on:mouseleave
	disabled={disabled || onhold}
>
	<slot />
</h2>
