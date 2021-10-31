<script lang="ts">
	export let addClass: string = '';

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
			: 'ghost';
	}

	$: {
		size = xs
			? 'prose-sm'
			: sm
			? 'prose'
			: md
			? 'prose-lg'
			: lg
			? 'prose-xl'
			: xl
			? 'prose-2xl'
			: 'prose';
	}
</script>

<article
	class={`
			${addClass}
			${size}
			${color}
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
>
	<slot />
</article>
