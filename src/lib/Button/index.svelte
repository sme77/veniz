<script lang="ts">
	type Type = 'button' | 'submit';

	export let addClass: string = '';

	export let type: Type = 'button';
	export let disabled: boolean = false;
	export let onhold: boolean = false;

	export let basic: boolean = false;
	export let primary: boolean = false;
	export let success: boolean = false;
	export let warning: boolean = false;
	export let danger: boolean = false;
	export let info: boolean = false;

	export let outlined: boolean = false;
	export let light: boolean = false;
	export let dark: boolean = false;
	export let inverted: boolean = false;

	export let xs: boolean = false;
	export let sm: boolean = false;
	export let md: boolean = false;
	export let lg: boolean = false;
	export let xl: boolean = false;

	export let block: boolean = false;
	export let rounded: boolean = false;
	export let soft: boolean = false;
	export let flat: boolean = false;

	let color = '';
	let size = '';
	let shape = '';

	$: {
		color = basic
			? 'basic'
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
			: 'basic';
	}

	$: {
		size = xs ? 'xs' : sm ? 'sm' : md ? 'md' : lg ? 'lg' : xl ? 'xl' : 'md';
	}

	$: {
		shape = soft ? 'soft' : rounded ? 'rounded' : flat ? 'flat' : 'soft';
	}
</script>

<button
	class={`
			${addClass}
			${size}
			${shape}
			${color}
			clickable 
		 	transform
		 	transition
		 	my-1
		 	py-2
		 	px-5
		 	duration-50
		 	ease-in-out
		 	border-solid
		 	inline-flex
		 	items-center
		 	justify-center
			focus:outline-none
			hover:translate-y-0.5
			active:scale-95
			`}
	class:ligt={light}
	class:darc={dark}
	class:outlined
	class:inverted
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
