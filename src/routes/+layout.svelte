<script>
  import Header from "$lib/components/Header.svelte";
  //Selected Skeleton Theme
  import "@skeletonlabs/skeleton/themes/theme-skeleton.css";
  // This contains the bulk of Skeletons required styles:
  import "@skeletonlabs/skeleton/styles/skeleton.css";
</script>

<div class="container mx-auto flex-col justify-between variant-ghost-secondary">
  <header class="p-10">
    <Header />
    <hr />
  </header>
  <main class="min-h-fit">
    <slot />
  </main>

  <footer class=" inset-x-0 bottom-0 text-xs">
    <div class="p-4 text-center text-neutral-700 dark:text-neutral-200">
      © 2023 Copyright:
      <a
        class="text-neutral-800 dark:text-neutral-400"
        href="https://rdtect.xyz/">Rick 'rdtect' De</a
      >
    </div>
  </footer>
</div>

<style lang="postcss">
</style>
