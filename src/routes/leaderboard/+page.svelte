<script lang="ts">
	import Leaderboard from '$lib/components/Leaderboard.svelte';

	let data: string = 'hello world!';
</script>

<section class="text-center">
	<h1 class="text-6xl p-8 font-bold pt-20 dark:text-white">Leaderboard</h1>

	<Leaderboard {data} />
</section>
