<script>

import Hero from './Hero.svelte';
import Showcase from './Showcase.svelte'
import Featured from './FeaturedProjects.svelte'
import Connect from './Connect.svelte'
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="rdTect personal webSite showcasing product design projects" />
</svelte:head>

<Hero />
<Showcase/>
<Featured/>
<Connect/>

<!-- color blue tailwind -->

<style lang="postcss">
	.btn {
		@apply rounded-xl bg-yellow-500 hover:bg-slate-800 hover:text-white;
	}
</style>
