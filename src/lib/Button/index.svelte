<script lang="ts">
	type Type = 'button' | 'submit';

	export let addClass: string = '';

	export let type: Type = 'button';
	export let disabled: boolean = false;
	export let onhold: boolean = false;

	export let base: boolean = false;
	export let primary: boolean = false;
	export let success: boolean = false;
	export let warning: boolean = false;
	export let danger: boolean = false;
	export let info: boolean = false;
	export let link: boolean = false;

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
			: link
			? 'link'
			: 'base';
	}

	$: {
		size = xs ? 'xs' : sm ? 'sm' : md ? 'md' : lg ? 'lg' : xl ? 'xl' : 'md';
	}
</script>

<button
	class={`
			${addClass}
			${size}
			${color}
			clickable 
		 	transform
		 	transition
		 	my-1
		 	py-2
		 	px-5
		 	duration-75
		 	ease-in-out
		 	border-solid
		 	inline-flex
		 	items-center
		 	justify-center
			focus:outline-none
	 		active:scale-95 
			rounded-lg
			`}
	class:light
	class:dark
	class:outlined
	class:ghost
	class:block
	on:click
	on:focus
	on:mouseover
	on:mouseenter
	on:mouseleave
	disabled={disabled || onhold}
	{type}
>
	<slot />
</button>
