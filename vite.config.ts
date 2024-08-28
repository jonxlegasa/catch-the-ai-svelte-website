import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  server: {
    host: '0.0.0.0',  // Binds to all network interfaces
    port: 3000        // You can change the port if needed
  },
  plugins: [sveltekit()],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  }
});
