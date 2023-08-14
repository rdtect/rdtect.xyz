<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import "../app.postcss";
  import { dev } from "$app/environment";
  import { inject } from "@vercel/analytics";

  inject({ mode: dev ? "development" : "production" });
</script>

<main class="main-container flex flex-col min-h-screen">
  <header class="header">
    <Header />
    <hr />
  </header>
  <section class="main-section flex-grow">
    <slot />
  </section>
  <footer class="footer">
    <div class="footer-content">
      © 2023 Copyright:
      <a class="footer-link" href="https://rdtect.xyz/">Rick 'rdtect' De</a>
    </div>
  </footer>
</main>

<style lang="postcss">
  .main-container {
    @apply container mx-auto variant-ghost-secondary;
  }

  .header {
    @apply p-10;
  }

  .main-section {
    @apply justify-center w-full;
  }

  .footer {
    @apply inset-x-0 bottom-0 text-xs p-4 text-center text-neutral-700 dark:text-neutral-200;
  }

  .footer-link {
    @apply text-neutral-400 dark:text-neutral-400;
  }
</style>
