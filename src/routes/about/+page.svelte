<script>
  // import { createScene2 } from '../../lib/scene2.js';
  // import {onMount} from 'svelte'
  // let el2;

  // 	onMount(()=>{

  // 	createScene2(el2)
  // })

  import profilePic from "$lib/images/profilePic2.jpg";
  import sign from "$lib/images/sign.png";
</script>

<svelte:head>
  <title>About</title>
  <meta name="description" content="About this app" />
</svelte:head>

<div class="m-4 mx-10">
  <h1 class="text-xl sm:text-2xl md:text-3xl">About</h1>
  <br />
  <div class="flex flex-col md:flex-row">
    <img
      class="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-1/2 md:rounded-none md:rounded-l-lg"
      src={profilePic}
      alt=""
    />
    <div
      class="flex flex-col rounded-lg variant-ghost-secondary md:max md:flex-row md:w-1/2"
    >
      <div class="flex flex-col justify-between p-6">
        <p>
          My passion lies in working and designing at the <strong
            >intersection of the Physical and Digital realms</strong
          >.
        </p>
        <br />
        <p>
          As a practicing Architect, I had designed <strong>visually appealing</strong
          > parametric forms and spaces. Now, use technology to create digital
          products like digital illustrations, publications, websites, and 3D models.
        </p>
        <br />
        <p>
          My interest in UI-UX aligns with my vision of Architecture, <strong
            >motivating me to create user experiences</strong
          >. I've shared my knowledge of Architecture and UI-UX at DIT
          University and started my own studio, where I've created both physical
          and virtual products. I was an early adopter of WEB3 and NFTs, and I'm
          the creator of the world's first
          <strong>crowdfunded NFT Bollywood movie</strong>
          (now available on Disney+ Hotstar). I was also invited to become a co-founder
          and the <strong> Metaverse Architect for Quantlabs</strong>, where we
          designed and implemented a
          <strong>Virtual Durga Puja Platform</strong>.
        </p>
        <br />
        <p>
          Besides creating 3D models in Blender and designing in Figma, I enjoy
          coding in Python and JavaScript. I've also worked as a Front-End
          Engineer. I'm passionate about creating functional UI and interactive
          websites; I primarily use Svelte, and have an understanding of
          Three.js and Babylon.js. I'm a proponent of open-source technology,
          and am excited to learn Godot 4.
        </p>
        <br />
        <p>
          I thrive when working and designing at the <strong
            >intersection of the Physical and Digital worlds</strong
          >.
        </p>
        <img
          class="mx-auto max-h-sm max-w-xs filter invert"
          src={sign}
          alt=""
        /><a
          href="/resume"
          class="btn variant-outline-primary text-white"
          data-sveltekit-preload-data="hover">Resumé</a
        >
      </div>
    </div>
  </div>
</div>
