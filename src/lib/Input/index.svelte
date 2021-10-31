<script lang="ts">
	/* <input type="button"> */
	/* <input type="checkbox"> */
	/* <input type="color"> */
	/* <input type="date"> */
	/* <input type="datetime-local"> */
	/* <input type="file"> */
	/* <input type="hidden"> */
	/* <input type="image"> */
	/* <input type="month"> */
	/* <input type="radio"> */
	/* <input type="range"> */
	/* <input type="reset"> */
	/* <input type="search"> */
	/* <input type="submit"> */
	/* <input type="tel"> */
	/* <input type="time"> */
	/* <input type="url"> */
	/* <input type="week"> */

	type Type = 'text' | 'number' | 'email';

	export let placeholder: string = '';
	export let name: string = '';
	export let id: string = '';
	export let value: string = '';

	export let addClass: string = '';

	export let type: Type = 'text';
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
		if (!outlined && !ghost && !dark) light = true;
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

<input
	class={`
			${addClass}
			${color} 
			${size} 
			input
		 	transform
		 	transition
			my-2
	 		py-3
	 		px-5
		 	duration-50
		 	ease-in-out
		 	border-solid
	 		w-full
			focus:outline-none
			focus:shadow-lg
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
	on:mouseleave
	{type}
	{placeholder}
	{id}
	{name}
	{value}
/>
