<script>
  import landing from "$lib/images/landing-no-bg.png";
  import content from "$lib/data/content.json";
</script>

<section>
  <div class="container mx-auto px-4 md:px-8 lg:px-16 max-w-screen-lg">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div class="text-center lg:text-left mb-12 md:mt-12 lg:mt-0 lg:mb-0">
        <div
          class="rounded-lg bg-[hsla(0,0%,100%,0.55)] p-6 md:p-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 backdrop-blur-[30px] text-light-400"
        >
          <h1
            class="mt-2 mb-6 text-4xl font-medium tracking-tight md:text-5xl xl:text-6xl text-white variant-out"
          >
            {content.home.messageHeader}
          </h1>
          <p class="text-xl mb-16 font-medium text-white">
            {@html content.home.messageContent}
          </p>
          <a
            href="/resume"
            class="btn variant-outline-primary text-white"
            data-sveltekit-preload-data="hover">Resumé</a
          >
          <a
            href="/projects"
            class="btn variant-outline-primary text-white"
            data-sveltekit-preload-data="hover">Projects</a
          >
        </div>
      </div>
      <div class="flex justify-center">
        <img
          src={landing}
          class="w-full h-auto max-w-md md:max-w-lg rounded-lg dark:shadow-black/20"
          alt=""
        />
      </div>
    </div>
  </div>
</section>
