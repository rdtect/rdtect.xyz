<script>
    import Nav from './Nav.json'
</script>

<div class="drawer">
	<input id="navbar" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<!-- Navbar -->
		<div class="w-full navbar bg-base-300">
			<div class="flex-none lg:hidden">
				<label for="navbar" class="btn btn-square btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block w-6 h-6 stroke-current"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/></svg
					>
				</label>
			</div>
			<div class="flex-1 px-2 mx-2">
				rdTECT
				<!-- TODO: insert rdTECT logo here -->
			</div>
			<div class="flex-none hidden lg:block">
				<ul class="menu menu-horizontal">
					<!-- Navbar menu content here -->
					<li><a href={Nav.about.href}>{Nav.about.rel}</a></li>
					<li><a href={Nav.projects.href}>{Nav.projects.rel}</a></li>
					<li><a href={Nav.blog.href}>{Nav.blog.rel}</a></li>
				</ul>
			</div>
		</div>
		<!-- Page content here -->
	</div>
	<div class="drawer-side">
		<label for="navbar" class="drawer-overlay" />
		<ul class="menu p-4 w-80 h-full bg-base-200">
			<!-- Sidebar content here -->
			<li><a href={Nav.about.href}>{Nav.about.rel}</a></li>
					<li><a href={Nav.projects.href}>{Nav.projects.rel}</a></li>
					<li><a href={Nav.blog.href}>{Nav.blog.rel}</a></li>
		</ul>
	</div>
</div>
