<script >export let addClass = '';
export let type = 'button';
export let disabled = false;
export let onhold = false;
export let basic = false;
export let primary = false;
export let success = false;
export let warning = false;
export let danger = false;
export let info = false;
export let outlined = false;
export let light = false;
export let dark = false;
export let inverted = false;
export let xs = false;
export let sm = false;
export let md = false;
export let lg = false;
export let xl = false;
export let block = false;
export let rounded = false;
export let soft = false;
export let flat = false;
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
