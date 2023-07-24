<script>
  import content from "$lib/data/content.json";
</script>

<div class="p-6">
  <h2>{content.services.pageTitle}</h2>
  <div>
    {#each content.services.servicesList as service}
      <div>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
    {/each}
  </div>
</div>
