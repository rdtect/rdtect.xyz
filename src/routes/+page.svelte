<script>
  import Counter from "./Counter.svelte";
  import welcome from "$lib/images/svelte-welcome.webp";
  import welcome_fallback from "$lib/images/svelte-welcome.png";
  import { onMount } from "svelte";
  import { browser } from "$app/environment";
  import { createScene } from "../lib/scene.js";

  //   import { bind } from 'svelte/internal';

  let el;

  onMount(() => {
    createScene(el);
  });

  // if (browser){
  // 	createScene(el)
  // }
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<html lang="svelte">
  <section>
    <span>
      <canvas id="el1" bind:this={el} />
    </span>
    <h1>
      <span class="welcome">
        <picture>
          <source srcset={welcome} type="image/webp" />
          <img src={welcome_fallback} alt="Welcome" />
        </picture>
      </span>

      to your new<br />SvelteKit app
    </h1>

    <h2>
      try editing <strong>src/routes/+page.svelte</strong>
    </h2>

    <Counter />
  </section>
</html>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.6;
  }

  h1 {
    width: 100%;
  }

  /* .welcome {
    display: block;
    position: relative;
    width: 100%;
    height: 0;
    padding: 0 0 calc(100% * 495 / 2048) 0;
  } */

  /* .welcome img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: block;
  } */
  /* canvas {
    flex: auto;
    position: absolute;
    width: 50%;
    height: 50%;
    top: 10;
  }
  #el1 {
    position: relative;
    width: 100%;
    height: 100%;
    top: 10;
  } */
</style>
