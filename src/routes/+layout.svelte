<script>
	import "../app.postcss";
    import Header from '$lib/Header.svelte';
    import './styles.css';
	
// Your selected Skeleton theme:
import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

// This contains the bulk of Skeletons required styles:
import '@skeletonlabs/skeleton/styles/skeleton.css';

// Finally, your application's global stylesheet (sometimes labeled 'app.css')
import '../app.postcss';
						
</script>

<div class="app">
	<Header></Header>

	<main>
		<slot></slot>
	</main>

	<footer>
		<p>(c)Rick 'rdtect' De, 2023</p>
	</footer>
</div>

<style>


	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	/* footer a {
		font-weight: bold;
	} */

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
