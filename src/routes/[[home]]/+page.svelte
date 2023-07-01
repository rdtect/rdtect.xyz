<script>
  import Landing from "./Landing.svelte";
  import { Avatar } from "@skeletonlabs/skeleton";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="rdTect personal webSite" />
</svelte:head>

<html lang="svelte">
  <Landing />
  <section>
    <Avatar src="https://i.pravatar.cc/" />
  </section>
  <section>
    <a class="btn variant-filled-primary" href="https://kit.svelte.dev/"
      >SvelteKit</a
    >
    <a class="btn variant-filled-secondary" href="https://tailwindcss.com/"
      >Tailwind</a
    >
    <a class="btn variant-filled-tertiary" href="https://github.com/">GitHub</a>
  </section>
</html>
