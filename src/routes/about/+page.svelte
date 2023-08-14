<script>
  import profilePic from "$lib/images/profilePic2.jpg";
  import sign from "$lib/images/sign.png";

  const paragraphs = `With a genuine passion for blending the realms of Physical and Digital, my work is a reflection of this fascination.<br/><br/>
As a practicing Architect, I employed my aesthetic prowess to design visually appealing parametric forms and spaces. Today, my work has evolved to encompass the world of digital creations such as digital illustrations, immersive publications, responsive websites, and intricate 3D models.<br/><br/>
My deep-seated interest in UI-UX aligns perfectly with my vision for Architecture, fostering an innate desire to craft compelling user experiences. I've had the privilege of imparting my knowledge of Architecture and UI-UX at DIT University and spearheaded my own studio to transform both physical and virtual spaces. Being an early adopter of WEB3 and NFTs, I had the opportunity to craft the world's first crowdfunded NFT Bollywood movie, now streaming on Disney+ Hotstar. My work led me to become a co-founder and the Metaverse Architect for Quantlabs, contributing to the creation of a Virtual Durga Puja Platform.<br/><br/>
When I am not shaping the digital world with 3D models in Blender or designing in Figma, I delve into coding in Python and JavaScript. I've played a crucial role as a Front-End Engineer and take pride in my ability to build functional UI and interactive websites. Svelte, Three.js, and Babylon.js are my go-to tools for such creations. A firm believer in the power of open-source technology, I am eager to explore the capabilities of Godot 4.<br/><br/>
In essence, my passion lies in harnessing my skills and knowledge to bridge the gap between the Physical and Digital worlds, striving to redefine user experiences and digital design.<br/><br/>`;
</script>

<svelte:head>
  <title>About</title>
  <meta name="description" content="About this app" />
</svelte:head>

<div class="about">
  <h1>About</h1>
  <div class="content">
    <img class="image" src={profilePic} alt="" />
    <div class="text">
      <p>{@html paragraphs}</p>
      <img class="sign" src={sign} alt="" />
      <a href="/resume" class="btn" data-sveltekit-preload-data="hover"
        >Resumé</a
      >
    </div>
  </div>
</div>

<style lang="postcss">
  .about {
    @apply m-4 mx-10;
  }

  .about h1 {
    @apply text-xl sm:text-2xl md:text-3xl;
  }

  .content {
    @apply flex flex-col md:flex-row mt-4;
  }

  .image {
    @apply h-96 w-full rounded-t-lg object-cover md:h-auto md:w-1/2 md:rounded-none md:rounded-l-lg;
  }

  .text {
    @apply flex flex-col rounded-lg bg-gray-200 dark:bg-gray-800 md:w-1/2 p-4 md:p-8 justify-between;
  }

  .text p {
    @apply text-gray-800 dark:text-gray-200;
  }

  .sign {
    @apply mx-auto max-w-xs filter invert;
  }

  .btn {
    @apply self-center rounded-lg variant-ghost-secondary bg-blue-500 text-white hover:bg-blue-700 mt-4 transition-all duration-300;
  }
</style>
