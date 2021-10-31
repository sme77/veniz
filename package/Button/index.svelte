<script >export let addClass = '';
export let type = 'button';
export let disabled = false;
export let onhold = false;
export let base = false;
export let primary = false;
export let success = false;
export let warning = false;
export let danger = false;
export let info = false;
export let link = false;
export let outlined = false;
export let light = false;
export let dark = false;
export let ghost = false;
export let xs = false;
export let sm = false;
export let md = false;
export let lg = false;
export let xl = false;
export let block = false;
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
