<script>
  import { page } from "$app/stores";
  import logo from "$lib/images/svelte-logo.svg";
  import github from "$lib/images/github.svg";
  import rdtectLogo from "$lib/images/rdtect.svg";
</script>

<header class="flex flex-col sm:flex-row justify-between items-center">
  <div class="logo mb-4 sm:mb-0">
    <a href="/">
      <img class="h-7" src={rdtectLogo} alt="" />
    </a>
  </div>

  <nav>
    <ul
      class="flex flex-col sm:flex-row justify-evenly text-2xl font-bold"
      style="text-transform:uppercase "
    >
      <li
        class=" px-4"
        aria-current={$page.url.pathname === "/about" ? "page" : undefined}
      >
        <a href="/about">About</a>
      </li>

      <li
        class=" px-4"
        aria-current={$page.url.pathname.startsWith("/projects")
          ? "page"
          : undefined}
      >
        <a href="/projects">Projects</a>
      </li>
      <li
        class=" px-4"
        aria-current={$page.url.pathname.startsWith("/blog")
          ? "page"
          : undefined}
      >
        <a href="/blog">Blog</a>
      </li>
    </ul>
  </nav>
</header>
