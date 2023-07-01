<script>
  import landing from "$lib/images/landing.webp";
  import content from "$lib/data/content.json";
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

