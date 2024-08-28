<script lang="ts">
	import { initWebSocket, sendWebSocketMessage } from '$lib/utils/websocket';

	type Messages = {
		avatar: any;
		name: string;
		status: string;
		text: string;
		time: number;
	};

	let otherMessages: Messages[] = [
		{
			avatar: 'avatar',
			name: 'User #1',
			status: 'Sent',
			text: 'This is a test message mother fucker',
			time: 900
		}
	];

	export let userMessages: Messages[] = [
		{
			avatar: 'avatar',
			name: 'User #1',
			status: 'Sent',
			text: 'This is a test message mother fucker',
			time: 900
		}
	];

	interface MessageData {
		name: string;
		message: string;
	}

	let messageData: MessageData = {
		name: '',
		message: ''
	};

	async function handleSendMessage(event: Event): Promise<void> {
		event.preventDefault(); // Prevent the default form submission

		const form = event.target as HTMLFormElement;
		const messageInput = form.querySelector('#message') as HTMLTextAreaElement;

		messageData.message = messageInput.value;

		console.log(messageData.message);

		// Log the formData to ensure it's correct
		console.log('Form submitted with data:', messageData);

		try {
			initWebSocket();
			sendWebSocketMessage(messageData.message);
		} catch (error) {
			console.log('that shit did not work');
		}

		// Optionally clear the textarea after sending the message
		messageInput.value = '';
	}
</script>

<section class="flex justify-center items-center min-h-screen bg-gray-100">
	<div class="shadow-md rounded-lg p-6 container w-1/2 mx-auto flex flex-col space-y-4 h-[80vh]">
		<!-- Chat Messages Container -->
		<div class="flex-1 overflow-y-auto space-y-4 p-4">
			{#each otherMessages as message, index}
				<div class="chat chat-start">
					<div class="chat-image avatar">
						<div class="w-10 rounded-full">
							<img alt="User Avatar" src={message.avatar} />
						</div>
					</div>
					<div class="chat-header">
						{message.name}
						<time class="text-xs opacity-50">{message.time}</time>
					</div>
					<div class="chat-bubble">{message.text}</div>
					<div class="chat-footer opacity-50">{message.status}</div>
				</div>
			{/each}

			{#each userMessages as message, index}
				<div class="chat chat-end">
					<div class="chat-image avatar">
						<div class="w-10 rounded-full">
							<img alt="User Avatar" src={message.avatar} />
						</div>
					</div>
					<div class="chat-header">
						{message.name}
						<time class="text-xs opacity-50">{message.time}</time>
					</div>
					<div class="chat-bubble">{message.text}</div>
					<div class="chat-footer opacity-50">{message.status}</div>
				</div>
			{/each}
		</div>
		<form
			on:submit={handleSendMessage}
			class="flex items-center space-x-4"
			method="POST"
			action="?/sendMessage"
		>
			<textarea
				class="textarea textarea-bordered w-full resize-none"
				placeholder="Type your message..."
				id="message"
				name="message"
				bind:value={messageData.message}
			/>
			<button type="submit" class="btn btn-primary">Send</button>
		</form>
	</div>
</section>
