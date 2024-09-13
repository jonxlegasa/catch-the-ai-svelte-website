<script lang="ts">
	import { sendWebSocketMessage } from '$lib/utils/websocket';
	import type { Message } from '$lib/models/socketio';

	import { goto } from '$app/navigation';
	let inputValue: string = '';

	async function handleSendUsername(event: Event): Promise<any> {
		localStorage.setItem('username', inputValue);
		const stringUsername: string | null = localStorage.getItem('username'); // Get the value from the store

		let userJoining: Message = {
			username: stringUsername,
			status: 'Sent',
			message: `${stringUsername} connected`, // Use template literals for string interpolation
			time: Date.now()
		};

		event.preventDefault(); // Prevent the default form submission
		console.log(inputValue);
		sendWebSocketMessage(userJoining);

		goto('/game/match');
	}
</script>

<section class="flex flex-col justify-center items-center min-h-screen p-4">
	<div class="text-center space-y-8 w-full max-w-md">
		<h1 class="text-6xl font-bold dark:text-white">Let's Play!</h1>
		<h1 class="text-3xl font-light dark:text-white">
			Think you have what it takes to catch an AI? &#129302;
		</h1>
		<form
			on:submit={handleSendUsername}
			class="flex flex-col items-center space-y-4 w-full"
			method="POST"
			action="?/joinGame"
		>
			<input
				type="text"
				name="username"
				placeholder="Enter a username"
				class="w-full p-4 border bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 rounded-md"
				bind:value={inputValue}
			/>

			<button class="btn btn-neutral text-2xl w-full" type="submit">Play game</button>
		</form>
	</div>
</section>
