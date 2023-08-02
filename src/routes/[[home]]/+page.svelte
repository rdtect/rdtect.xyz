<script>
  import Landing from "./Landing.svelte";
  import { Avatar } from "@skeletonlabs/skeleton";
  import Soon from "./ComingSoon.svelte";
  import About from "./About.svelte";
  import Services from "./Services.svelte";
  import Portfolio from "./Portfolio.svelte";
  import Contact from "./Contact.svelte";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="rdTect personal webSite" />
</svelte:head>

<html lang="svelte">
  <section>
    <Landing />
    <hr />
    
    <h1>
      <!-- About -->
      <About />

      <!-- Services -->
      <Services />

      <!-- Portfolio -->
      <Portfolio />

      <!-- Contact -->
      <Contact />
    </h1>
    <!-- <Soon /> -->
  </section>
</html>
