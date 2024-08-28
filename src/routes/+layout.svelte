<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<section
	class="bg-white dark:bg-gray-800
  min-h-screen transition-colors duration-300"
>
	<div class="my-3">
		<Navbar />
	</div>

	<slot />
</section>
