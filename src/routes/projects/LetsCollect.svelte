<script lang="ts">
  import projectImage from "$lib/images/letsCollect.jpeg";
  let currentTile: number = 0;
  let currentVariant = "variant-ghost";
</script>

<section class="m-2 p-2 bg-gradient-to-br variant-gradient-secondary-tertiary">
  <div class="w-full text-token grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="card {currentVariant} p-4 flex justify-center items-center">
      <div id="image-container">
        <img src={projectImage} alt="" width="100%" />
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
          <h3 class="h3" data-toc-ignore>Lets Collect</h3>
          <article>
            <p>
              As the product designer of the groundbreaking project "Lets
              Collect," I crafted a dark and futuristic website with a logo
              resembling a QR code and vibrant neon colors. The platform allows
              users to become producers of the first NFT funded film. The
              website features different pages, including Mint, Our Story, Team,
              and Connect.
            </p>
            <br />

            <p>
              The Mint page showcases four categories of NFTs, each offering
              unique benefits like producer credits, premiere invites, profit
              sharing, and exclusive NFTs. The Our Story page highlights the
              project's historic significance, with actor Vishal Malhotra as the
              brainchild behind the NFT project, benefiting daily wage workers
              in the film industry and providing opportunities for people
              worldwide to be part of history.
            </p>
            <br />

            <p>
              The Team page introduces the project's key contributors, including
              Vishal Malhotra, the founder, who conceived the NFT project, and
              myself, Rick De, as the product designer who implemented the
              concept on the web3 side.
            </p>
            <br />

            <p>
              The Connect page offers various contact options, including email,
              phone, social media links, and a contact form. Through my design
              efforts, Lets Collect stands as a gateway to an extraordinary
              cinematic experience, revolutionizing the film industry and
              offering an immersive NFT-based platform for users worldwide.
            </p>
            <br />

            <p>
              <a
                class="btn variant-ghost-primary"
                href="https://web.archive.org/web/20230129194717/https://letscollect.live/"
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
              <span class="chip variant-filled">WEB3</span>
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
