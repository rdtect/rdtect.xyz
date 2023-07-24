<script>
  import data from '$lib/data/Projects/MapleCaseStudy.json';
</script>

<div class="container mx-auto px-4">
  {#each data.sections as section (section.title)}
    <div class="my-8">
      <h2 class="text-2xl font-bold mb-2">{section.title}</h2>
      <p class="text-lg mb-4">{section.content}</p>
      {#each section.images as image (image)}
        <img class="w-full h-auto" src={image} alt={section.title} />
      {/each}
    </div>
  {/each}
</div>