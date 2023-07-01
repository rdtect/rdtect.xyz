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
  <h1 class="text-xl">About</h1>
  <br />
  <div class="flex">
    <img
      class="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-auto md:rounded-none md:rounded-l-lg"
      src={profilePic}
      alt=""
    />
    <div
      class="flex flex-col rounded-lg variant-ghost-secondary md:max md:flex-row"
    >
      <div class="flex flex-col justify-between p-6">
        <p>
          I love to work and design <strong
            >at the nexus of the Physical and Virtual</strong
          >.
        </p>
        <br />
        <p>
          I am an Architect by profession and practice, designing <strong
            >aesthetically captivating</strong
          > parametric forms and spaces. I have also leveraged technology for design
          and have created digital products, such as digital illustrations, publications,
          websites, and 3D.
        </p>
        <br />
        <p>
          UI-UX resonated with my vision of what Architecture could be, <strong
            >inspiring me to craft user experiences</strong
          >. I have shared my knowledge of Architecture and UI-UX at DIT
          University. I started my own studio, where I created both physical and
          virtual products. I was an early adopter of WEB3 and NFTs. I am the
          creator of the world's first
          <strong>crowdfunded NFT Bollywood movie</strong>
          (now available on Disney+ Hotstar). I was also invited to become a co-founder
          and the <strong> Metaverse Architect for Quantlabs</strong>, and we
          designed and implemented a
          <strong>Virtual Durga Puja Platform</strong>.
        </p>
        <br />
        <p>
          In addition to making 3D models in Blender and designing in Figma, I
          enjoy coding in Python and JavaScript. I have also served as a
          Front-End Engineer. I am passionate about creating functional UI and
          interactive websites; I primarily use Svelte, and have an
          understanding of Three.js and Babylon.js. I am a proponent of
          open-source technology, and am eager to learn Godot 4.
        </p>
        <br />
        <p>
          I relish working and designing <strong
            >at the crossroads of the Physical and Virtual</strong
          >.
        </p>
        <img class= " mx-auto max-h-sm max-w-xs filter invert "src={sign} alt="" />
      </div>
    </div>
  </div>
</div>
