<script>
  import landing from "$lib/images/landing-no-bg.png";
  import { home } from "$lib/data/content.json";
</script>

<section class="container">
  <div class="content-grid">
    <div class="content-card">
      <h1 class="header">{home.messageHeader}</h1>
      <p class="content-text">{@html home.messageContent}</p>
      {#each ['/resume', '/projects'] as link}
        <a href={link} class="btn" data-sveltekit-preload-data="hover">{link.slice(1)}</a>
      {/each}
    </div>
    <div class="image-container">
      <img src={landing} class="landing-image" alt="" />
    </div>
  </div>
</section>

<style lang='postcss'>
  .container {
    @apply mx-auto px-4 md:px-8 lg:px-16 max-w-screen-lg;
  }
  .content-grid {
    @apply grid grid-cols-1 lg:grid-cols-2 gap-8 items-center;
  }
  .content-card {
    @apply text-center lg:text-left mb-12 md:mt-12 lg:mt-0 lg:mb-0;
    @apply rounded-lg bg-[hsla(0,0%,100%,0.55)] p-6 md:p-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 backdrop-blur-[30px] text-white;
  }
  .header {
    @apply mt-2 mb-6 text-4xl font-medium tracking-tight md:text-5xl xl:text-6xl text-white ;
  }
  .content-text {
    @apply text-xl mb-16 font-medium text-white;
  }
  .btn {
    @apply variant-outline-primary text-white rounded-xl m-2;
  }
  .image-container {
    @apply flex justify-center variant-outline-secondary shadow-lg;
  }
  .landing-image {
    @apply w-full h-auto max-w-md md:max-w-lg rounded-lg dark:shadow-black/20;
  }
</style>
