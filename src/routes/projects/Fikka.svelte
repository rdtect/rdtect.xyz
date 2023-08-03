<script lang="ts">
  import fikkaImage from "$lib/images/fikka.svg";
  let currentTile: number = 0;
  let currentVariant = "variant-ghost";
</script>

<section class="m-2 p-2 bg-gradient-to-br variant-gradient-priamry-tertiary">
  <div class="w-full text-token grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="card {currentVariant} p-4 flex justify-center items-center">
      <div id="image-container">
        <img src={fikkaImage} alt="" width="100%" />
      </div>
    </div>
    <!-- Detailed -->

    <a
      class="card {currentVariant} card-hover overflow-hidden"
      href="/elements/cards"
    >
      <div class="align-middle">
        <header>
          <!-- <img src={getImageLink({ id: 'vjUokUWbFOs', w: 400, h: 175 })} class="bg-black/50 w-full aspect-[21/9]" alt="Post" /> -->
        </header>
        <div class="p-4 space-y-4">
          <h6 class="h6">Website</h6>
          <h3 class="h3" data-toc-ignore>Fikka NFT Marketplace</h3>
          <article>
            <p>
              Directed product design for Fikka.io, a pioneering NFT marketplace
              and WEB3 social media platform, enhancing user interaction and
              experience in the digital assets space
            </p>
            <br />

            <p>
              <a
                class="btn variant-ghost-primary"
                href="https://fikka.io"
                target="_blank"
                rel="noopener noreferrer">Visit Website</a
              >
            </p>
          </article>
        </div>
        <hr class="opacity-50" />
        <footer class="p-4 flex justify-start items-center space-x-4">
          <!-- <Avatar src={getImageLink({ id: 'YOErFW8AfkI', w: 32, h: 32 })} width="w-8" /> -->
          <div class="flex-auto flex justify-between items-center">
            <h6 class="font-bold">
              <span class="chip variant-filled">Website</span>
              <span class="chip variant-filled">Design</span>
            </h6>
            <small>On {new Date().toLocaleDateString()}</small>
          </div>
        </footer>
      </div>
    </a>
  </div>
</section>

<style>
  #image-container {
    /* background-image: url({quantWebImage}); */
    /* background-size: cover; */
    /* background-position: bottom; */
    width: 100%;
    height: 500px;
    overflow: auto;
  }
</style>
