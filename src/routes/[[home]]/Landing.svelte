<script>
  import landing from "$lib/images/landing.webp";
  import content from "$lib/content.json";
</script>

<section>
  <h1>
    <!-- <picture>
      <source srcset={landing} type="image/webp" />
      <img src={landing} alt="Welcome" />
    </picture> -->
    <h1>
      {content.home.messageHeader}
    </h1>
    <p>
      {content.home.messageContent}
    </p>
  </h1>
</section>

<style>
    section{
        background-image: url(/src/lib/images/landing.webp);
        background-size: cover;
        background-position: 0%;
        height: 100vh;
        width: 100%;
    }
  h1 {
    width: 100%;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }
  p {
    width: 100%;
    font-size: large;
    font-family: "Courier New", Courier, monospace;
  }
</style>
