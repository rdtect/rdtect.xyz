<script lang="ts">
  import Header from "$lib/components/Header.svelte";

  import "../app.postcss";
</script>

<div
  class="container mx-auto flex-col justify-between variant-ghost-secondary min-h-screen"
>
  <header class="p-10">
    <Header />
    <hr />
  </header>
  <main class="h-[90%]">
    <slot />
  </main>
</div>
<footer class=" inset-x-0 bottom-0 text-xs">
  <div class="p-4 text-center text-neutral-700 dark:text-neutral-200">
    © 2023 Copyright:
    <a class="text-neutral-400 dark:text-neutral-400" href="https://rdtect.xyz/"
      >Rick 'rdtect' De</a
    >
  </div>
</footer>

<style lang="postcss">
</style>
