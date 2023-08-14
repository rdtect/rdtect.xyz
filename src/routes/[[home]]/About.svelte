<script>
  import content from "$lib/data/content.json";
</script>

<div class="flex flex-col justify-between font-medium text-xl p-6 m-6 text-white">
  <h2 class="text-xl py-10">ABOUT ME</h2>
  <p>{@html content.about.content}</p>
</div>
<center>
  <a
    href="/about"
    class="btn variant-outline-primary"
    data-sveltekit-preload-data="hover">More</a
  >
</center>
<hr />
