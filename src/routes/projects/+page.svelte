<!-- <script>
  import Quantlabs from "./Quantlabs.svelte";
  import LetsCollect from "./LetsCollect.svelte";
  import Fikka from "./Fikka.svelte";
</script>

<h1 class="text-3xl p-2 m-2">Projects</h1>
<Quantlabs />
<LetsCollect />
<Fikka /> -->

<script lang="ts">
  import { onMount } from "svelte";
  import projects from "./projects.json";
  let currentVariant = "variant-ghost";

  let projectList:Array<T> = [];

  onMount(() => {
    projectList = projects.projects;
  });
</script>

{#each projectList as project (project.title)}
  <section class="m-2 p-2 bg-gradient-to-br variant-gradient-priamry-tertiary">
    <div class="w-full text-token grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="card {currentVariant} p-4 flex justify-center items-center">
        <div id="image-container">
          <img src={project.imageUrl} alt="" width="100%" />
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
            <h3 class="h3" data-toc-ignore>{project.title}</h3>
            <article>
              <p>
                {project.description}
              </p>
              <br />

              <p>
                <a
                  class="btn variant-ghost-primary"
                  href={project.projectUrl}
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
                {#each project.tags as tag (tag)}
                  <span class="chip variant-filled">{tag}</span>
                {/each}
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
{/each}
