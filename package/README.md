> :warning: **UNDER EARLY STAGES OF DEVELOPEMENT**

# Veniz

svelte windicss ui components

## Installation for sveltekit

```
yarn add -D veniz sass vite-plugin-windicss svelte-windicss-preprocess
```

create windi.config.js
config example

```
import { defineConfig } from 'windicss/helpers';
import flat from 'veniz/@palettes/flat';

export default defineConfig({
	darcMode: 'class',
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			...flat
		}
	}
});
```

create index.scss

```
@import veniz/@styles/index.scss
```

inside a .svelte file

```
<script lang="ts">
	import './index.scss';
	import 'virtual:windi.css';
</script>
```

## example

```
<script lang="ts">
	import './index.scss';
	import 'virtual:windi.css';
	import { Button } from 'veniz';
</script>

<Button>hello</Button>
```
