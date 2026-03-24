<script>
  import { onMount } from "svelte";
  import resume from "$lib/data/Resume_Rick De_Product Designer.pdf";
  let resumeLink = resume + "#zoom=95";
</script>

<center>
  <!-- svelte-ignore a11y-missing-attribute -->
  <object
    class="bg-white p-1 h-screen"
    data={resumeLink}
    type="application/pdf"
    width="90%"
  >
    <p>Unable to display PDF file. <a href={resume}>Download</a> instead.</p>
  </object>
</center>
