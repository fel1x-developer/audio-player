import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), tailwindcss()],

	test: {
		name: 'Player',
		clearMocks: true,
		include: ['src/**/*.svelte.{test,spec}.{js,ts}', 'src/**/*.{test,spec}.{js,ts}'],
		browser: {
			enabled: true,
			provider: 'playwright',
			// https://vitest.dev/guide/browser/playwright
			instances: [{ browser: 'chromium' }, { browser: 'firefox' }, { browser: 'webkit' }]
		}
	}
});
