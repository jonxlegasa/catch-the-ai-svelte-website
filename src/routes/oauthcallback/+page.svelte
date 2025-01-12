<script lang="ts">
	import { onMount } from 'svelte';
	import '../../app.css';
	import { tick } from 'svelte';

	let dots = '';
	const addDot = async () => {
		while (dots.length < 3) {
			dots += '.';
			await tick();
			await new Promise((resolve) => setTimeout(resolve, 500));
		}
		dots = '';
		addDot();
	};

	onMount(async () => {
		addDot();
	});
</script>

<div class="flex items-center justify-center min-h-screen bg-white">
	<h1 class="text-4xl font-bold text-gray-900">
		Redirecting<span>{dots}</span>
	</h1>
</div>
