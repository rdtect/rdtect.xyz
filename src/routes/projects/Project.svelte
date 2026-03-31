<script lang="ts">
  export let project;
</script>

<section class="m-2 p-2 bg-gradient-to-br variant-gradient-primary-tertiary">
  <div class="w-full text-token grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="card p-4 flex justify-center items-center">
      <div id="image-container">
        <img src={project.image} alt="" width="100%" />
      </div>
    </div>

    <a
      class="card card-hover overflow-hidden"
      href="/elements/cards"
    >
      <div class="align-middle">
        <header>
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
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer">Visit Website</a
              >
            </p>
          </article>
        </div>
        <hr class="opacity-50" />
        <footer class="p-4 flex justify-start items
