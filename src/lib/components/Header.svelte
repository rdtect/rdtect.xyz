<script>
  import { page } from "$app/stores";
  import logo from "$lib/images/svelte-logo.svg";
  import github from "$lib/images/github.svg";
  import rdtectLogo from "$lib/images/rdtect.svg";
</script>

<header class="flex justify-between">
  <div class="logo">
    <a href="/">
      <img class="h-7" src={rdtectLogo} alt="" />
    </a>
  </div>

  <nav>
    <ul class="flex justify-evenly">
      <!-- <li
        class=" px-4"
        aria-current={$page.url.pathname === "/" ? "page" : undefined}
      >
        <a href="/">Home</a>
      </li> -->

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
