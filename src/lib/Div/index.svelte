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

	export let background: boolean = false;

	$: {
		if (outlined || ghost || dark) light = false;
		else light = true;
	}

	export let block: boolean = false;

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

<div
	class={`
			${color} 
			${addClass}
      p-2
	`}
	class:light
	class:dark
	class:outlined
	class:ghost
	class:block
	class:background
	on:click
	on:focus
	on:mouseover
	on:mouseenter
	on:mouseleave
	disabled={disabled || onhold}
>
	<slot />
</div>
