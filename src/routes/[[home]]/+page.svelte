<script>
  import Landing from "./Landing.svelte";
  import About from "./About.svelte";
  import Services from "./Services.svelte";
  import Portfolio from "./Portfolio.svelte";
  import Contact from "./Contact.svelte";
</script>

<svelte:head>
  <title>Home</title>
  <meta
    name="description"
    content="Welcome to rdTect's personal website. Explore my portfolio, learn more about my services, and get in touch."
  />
</svelte:head>

<main>
  <Landing />
  <hr />

  <!-- About -->
  <About />

  <!-- Services -->
  <Services />

  <!-- Portfolio -->
  <Portfolio />

  <!-- Contact -->
  <Contact />
</main>
