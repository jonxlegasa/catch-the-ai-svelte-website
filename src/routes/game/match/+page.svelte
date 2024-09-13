<script lang="ts">
	import { initWebSocket, sendWebSocketMessage } from '$lib/utils/websocket';
	import { messagesStore } from '$lib/store/store';
	import { onMount } from 'svelte';
	import type { Message } from '$lib/models/socketio';

	onMount(() => {
		initWebSocket();
	});

	// Automatically subscribe to the store and reactively update `messages`
	let messages: any = $messagesStore;
	let username: string | null = localStorage.getItem('username');

	async function handleSendMessage(event: Event): Promise<void> {
		event.preventDefault(); // Prevent the default form submission
		const form = event.target as HTMLFormElement;
		const messageInput = form.querySelector('#message') as HTMLTextAreaElement;

		try {
			let newMessage: Message = {
				username: username,
				status: 'Sent',
				message: messageInput.value,
				time: Date.now()
			};

			sendWebSocketMessage(newMessage);
			messageInput.value = '';
		} catch (error) {
			console.log('that shit did not work');
		}

		console.log('the current messages: ', messages);
	}
</script>

<section class="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-800">
	<div
		class="shadow-lg rounded-lg p-6 container w-full max-w-md mx-auto flex flex-col space-y-4 h-[80vh]"
	>
		<!-- Chat Messages Container -->
		<div class="flex-1 overflow-y-auto space-y-4 p-4">
			<div class="flex-1 overflow-y-auto space-y-4 p-4">
				{#each $messagesStore as message, index}
					<div class="chat chat-start">
						<div class="chat-image avatar">
							<div class="w-10 rounded-full">
								<img alt="User Avatar" src="" />
							</div>
						</div>
						<div class="chat-header text-gray-700 dark:text-gray-300">
							{message.username}
							<time class="text-xs opacity-50">{new Date(message.time).toLocaleTimeString()}</time>
						</div>
						<div class="chat-bubble bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
							{message.message}
						</div>
						<div class="chat-footer opacity-50 text-gray-600 dark:text-gray-400">
							{message.status}
						</div>
					</div>
				{/each}
			</div>
		</div>

		<form
			on:submit={handleSendMessage}
			class="flex items-center space-x-4"
			method="POST"
			action="?/sendMessage"
		>
			<textarea
				class="textarea textarea-bordered w-full resize-none bg-white dark:bg-gray-600 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
				placeholder="Type your message..."
				id="message"
				name="message"
			/>
			<button type="submit" class="btn btn-primary dark:bg-blue-700 dark:text-white">Send</button>
		</form>
	</div>
</section>
