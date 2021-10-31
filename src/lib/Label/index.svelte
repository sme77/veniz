<script lang="ts">
	export let name: string = '';
	export let id: string = '';
	export let _for: string = '';

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

	export let xs: boolean = false;
	export let sm: boolean = false;
	export let md: boolean = false;
	export let lg: boolean = false;
	export let xl: boolean = false;

	export let block: boolean = false;

	let color = '';
	let size = '';

	$: {
		if (!outlined && !light && !dark) ghost = true;
	}

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

	$: {
		size = xs ? 'xs' : sm ? 'sm' : md ? 'md' : lg ? 'lg' : xl ? 'xl' : 'md';
	}
</script>

<label
	for={_for}
	{id}
	{name}
	class={`
			${addClass}
			${color} 
			${size} 
			px-2
			mt-2
			inline-block
		 	border-solid
			font-semibold
			rounded-lg
	`}
	class:light
	class:dark
	class:outlined
	class:ghost
	class:block
	disabled={disabled || onhold}
	on:click
	on:focus
	on:mouseover
	on:mouseenter
	on:mouseleave><slot /></label
>
