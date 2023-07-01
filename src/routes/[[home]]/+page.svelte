<script>
  import Landing from "./Landing.svelte";
  import { Avatar } from "@skeletonlabs/skeleton";
  import Soon from "./ComingSoon.svelte";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="rdTect personal webSite" />
</svelte:head>

<html lang="svelte">
  <section>
    <Soon/>

    <Landing />
   
  </section>
</html>
