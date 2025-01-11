<script lang="ts">
	import type { User } from '$lib/models/User';
	import { updateUser, userModel } from '$lib/store/store';

	import { goto } from '$app/navigation';
	import { v4 } from 'uuid';

	const uuidV4: string = v4();

	function handleSendUsername(event: Event) {
		event.preventDefault();
		let joinedUser: User = {
			username: inputValue,
			rank: 'player',
			entity: 'human',
			senderId: uuidV4
		};

		updateUser(joinedUser);

		goto('/game/match');
	}

	let inputValue: string = '';

	console.log($userModel);
</script>

<section class="flex flex-col justify-center items-center min-h-screen p-4">
	<div class="text-center space-y-8 w-full max-w-md">
		<h1 class="text-6xl font-bold dark:text-white">Let's Play!</h1>
		<h1 class="text-3xl font-light dark:text-white">
			Think you have what it takes to catch an AI? &#129302;
		</h1>
		<form on:submit={handleSendUsername} class="flex flex-col items-center space-y-4 w-full">
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
