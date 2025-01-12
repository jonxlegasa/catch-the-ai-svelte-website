<script lang="ts">
	import { page } from '$app/stores';
	import ErrorPage from '$lib/components/ErrorPage.svelte';

	let error_message: string | undefined = $page.error?.message;
	let funny_message: string = 'oops, looks like something went oopsieeee...';
	let signature: string = '- sincerly, dev team';
</script>

<ErrorPage {error_message} {funny_message} {signature} />
