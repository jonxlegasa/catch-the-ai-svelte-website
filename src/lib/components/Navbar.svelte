<script lang="ts">
	import DarkModeToggle from './DarkModeToggle.svelte';
</script>

<section class="my-10">
	<div
		class="bg-white dark:bg-gray-800 pl-2 pr-2 navbar z-50 fixed top-0 w-full shadow-md transition-colors duration-300"
	>
		<div class="navbar-start">
			<div class="dropdown">
				<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 text-gray-800 dark:text-white"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h8m-8 6h16"
						/>
					</svg>
				</div>
				<ul
					tabindex="0"
					class="menu menu-sm text-lg dropdown-content bg-white dark:bg-gray-800 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
				>
					<li>
						<a
							href="/"
							class="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
							>Home</a
						>
					</li>
					<li>
						<a
							href="/game"
							class="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
							>Game</a
						>
					</li>
					<li>
						<a
							href="/profile"
							class="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
							>Profie</a
						>
					</li>

					<li>
						<a
							href="/leaderboard"
							class="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
							>Leaderboard</a
						>
					</li>

					<li>
						<a
							href="/contact"
							class="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
							>Contact</a
						>
					</li>
					<li>
						<a
							href="/about"
							class="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
							>About</a
						>
					</li>
				</ul>
			</div>
			<a href="/" class="btn btn-ghost text-2xl text-gray-800 dark:text-white">Catch The AI</a>
		</div>
		<div class="navbar-center hidden lg:flex">
			<ul class="md:text-2xl font-medium menu menu-horizontal px-1">
				<li>
					<a
						href="/"
						class="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
						>Home</a
					>
				</li>
				<li>
					<a
						href="/game"
						class="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
						>Game</a
					>
				</li>

				<li>
					<a
						href="/profile"
						class="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
						>Profile</a
					>
				</li>

				<li>
					<a
						href="/leaderboard"
						class="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
						>Leaderboard</a
					>
				</li>

				<li>
					<a
						href="/contact"
						class="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
						>Contact</a
					>
				</li>
				<li>
					<a
						href="/about"
						class="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
						>About</a
					>
				</li>
			</ul>
		</div>
		<div class="navbar-end gap-x-4">
			<DarkModeToggle />
		</div>
	</div>
</section>
