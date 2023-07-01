<script>
	import { onMount } from 'svelte';
	import { typewriter } from '$lib/utils/transition.js';
	import { messages } from './data/loadingMessages.js';

	let i = -1;

	onMount(() => {
		const interval = setInterval(() => {
			i += 1;
			i %= messages.length;
		}, 2500);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<h1>loading...</h1>

{#key i}
	<p in:typewriter={{ speed: 10 }}>
		{messages[i] || ''}
	</p>
{/key}