<script>
  import { page } from "$app/stores";
  import logo from "$lib/images/svelte-logo.svg";
  import github from "$lib/images/github.svg";
  import rdtectLogo from "$lib/images/rdtect.svg";
  const links = ["/about", "/projects", "/blog"];
  const linkNames = ["About", "Projects", "Blog"];
</script>

<header class="flex flex-col sm:flex-row justify-between items-center">
  <div class="logo">
    <a href="/"><img src={rdtectLogo} alt="" /></a>
  </div>

  <nav>
    <ul class="nav-list">
      {#each links as link, i}
        <li
          class="nav-item"
          aria-current={$page.url.pathname.startsWith(link)
            ? "page"
            : undefined}
        >
          <a href={link}>{linkNames[i]}</a>
        </li>
      {/each}
    </ul>
  </nav>
</header>

<style lang="postcss">
  .nav-list {
    @apply flex flex-col sm:flex-row justify-center sm:justify-evenly text-2xl font-bold uppercase items-center;
  }
  .nav-item {
    @apply px-4;
  }
  .logo {
    @apply mb-4 sm:mb-0;
  }
  img {
    @apply h-7;
  }
</style>