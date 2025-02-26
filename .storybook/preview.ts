import type { Preview } from '@storybook/svelte';

const preview: Preview = {
	parameters: {
		backgrounds: {
			default: 'Dark'
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	}
};
export default preview;
