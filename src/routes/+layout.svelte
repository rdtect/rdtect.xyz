<script>
	import Nav from '$lib/NavBar/Nav.svelte';
	import '../app.postcss';

	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	// NOTE: the element that is using one of the theme attributes must be in the DOM on mount
	onMount(() => {
		themeChange(false);
		// 👆 false parameter is required for svelte
	});
</script>

<Nav />
<main class="flex-col">
	<body class="font-mont ">
		<slot />
	</body>
	<footer class="h-8 text-xs mt-8">
		<div class=" text-center text-neutral-700 dark:text-neutral-200">
			© 2023 Copyright:
			<a class="text-neutral-400 dark:text-neutral-400" href="https://rdtect.xyz/"
				>Rick 'rdtect' De</a
			>
		</div>
	</footer>
</main>
