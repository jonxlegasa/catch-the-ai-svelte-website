<script lang="ts">
	export let title: string;
	export let stat_value: number | string;
	export let emoji: string;
</script>

<div class="dark:bg-gray-800 dark:text-white stats shadow-lg mx-6">
	<div class="stat place-items-center">
		<div class="stat-title text-2xl p-2 dark:text-white">{title} {@html emoji}</div>
		<div class="stat-value p-2 font-medium">{stat_value}</div>
	</div>
</div>
