<script lang="ts">
	import { OAuthService } from '$lib/utils/custom-api-calls/oauthservice';

	async function handleGoogleSignIn(event: Event) {
		event.preventDefault();
		try {
			const response: any = await OAuthService.googleAuthorize(['profile', 'email']);
			const authorizationUrl = response.authorizationUrl;
			window.location.href = authorizationUrl;
		} catch (error) {
			console.error('Google Sign-In failed', error);
		}
	}
</script>

<section class="shadow-md bg-background dark:bg-background-dark">
	<div class="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
		<div class="sm:mx-auto sm:w-full sm:max-w-2xl space-y-2">
			<h2 class="mt-6 text-center text-4xl font-semibold text-primary dark:text-primary-dark">
				"It's nice to meet you!" - liburu
			</h2>
			<h3 class="text-center text-secondary dark:text-secondary-dark mt-6 text-md">
				Sign in to your account to continue
			</h3>
		</div>
		<div class="mt-6 sm:mx-auto sm:w-full sm:max-w-md space-y-2">
			<div class="py-8 px-4 shadow sm:rounded-lg sm:px-10 bg-surface dark:bg-surface-dark">
				<form class="space-y-6 my-4" action="#" method="GET">
					<button
						on:click|preventDefault={handleGoogleSignIn}
						class="text-center flex justify-center items-center p-4 text-lg font-semibold rounded-md text-white dark:text-black bg-primary dark:bg-primary-dark hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent dark:focus:ring-accent-dark transition ease-in-out duration-200 w-full"
					>
						<!-- Google icon SVG remains unchanged -->
						<span class="text-center">Sign in with Google</span>
					</button>
				</form>
				<h3 class="text-md text-secondary dark:text-secondary-dark text-center p-4">or</h3>
				<form class="space-y-8" action="#" method="POST">
					<div>
						<label
							for="email"
							class="block text-sm font-medium text-secondary dark:text-secondary-dark"
							>Email address</label
						>
						<input
							type="email"
							name="email"
							id="email"
							class="mt-1 block w-full px-3 py-2 bg-background dark:bg-background-dark border border-secondary dark:border-secondary-dark rounded-md text-primary dark:text-primary-dark shadow-sm placeholder-secondary dark:placeholder-secondary-dark focus:outline-none focus:ring-accent dark:focus:ring-accent-dark focus:border-accent dark:focus:border-accent-dark"
							placeholder="you@example.com"
						/>
					</div>
					<div class="mt-4">
						<label
							for="password"
							class="block text-sm font-medium text-secondary dark:text-secondary-dark"
							>Password</label
						>
						<input
							type="password"
							name="password"
							id="password"
							class="mt-1 block w-full px-3 py-2 bg-background dark:bg-background-dark border border-secondary dark:border-secondary-dark rounded-md text-primary dark:text-primary-dark shadow-sm placeholder-secondary dark:placeholder-secondary-dark focus:outline-none focus:ring-accent dark:focus:ring-accent-dark focus:border-accent dark:focus:border-accent-dark"
							placeholder="••••••••"
						/>
					</div>
					<div>
						<button
							type="submit"
							class="w-full bg-accent dark:bg-accent-dark inline-flex justify-center py-2 px-4 shadow-md rounded-md text-lg font-medium text-white hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent dark:focus:ring-accent-dark"
						>
							Sign In
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</section>
