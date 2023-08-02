<script>
  import landing from "$lib/images/landing-no-bg.png";
  import content from "$lib/data/content.json";
</script>

<section>
  <h1>
    <!-- <picture>
      <source srcset={landing} type="image/webp" />
      <img src={landing} alt="Welcome" />
    </picture> -->

    <!-- Jumbotron -->
    <div class="px-6 py-12 text-center md:px-12 lg:text-left">
      <div
        class="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl xl:px-32"
      >
        <div class="grid items-center lg:grid-cols-2">
          <div class="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
            <div
              class="block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[30px] text-light-400"
            >
              <h1
                class="mt-2 mb-6 text-4xl font-medium tracking-tight md:text-5xl xl:text-6xl text-white"
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
          <div class="md:mb-12 lg:mb-0">
            <img
              src={landing}
              class="min-h-[600px] min-w-[600px] rounded-lg dark:shadow-black/20"
              alt=""
              
            />
          </div>
        </div>
      </div>
    </div>
    <!-- Jumbotron -->
  </h1>
</section>
