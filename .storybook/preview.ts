import type { Preview } from '@storybook/svelte';

const preview: Preview = {
	parameters: {
		backgrounds: {
			values: [
				// 👇 Default values
				{ name: 'Dark', value: '#333' },
				{ name: 'Light', value: '#F7F9F2' }
			],
			// 👇 Specify which background is shown by default
			default: 'Dark'
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},
		layout: 'centered'
	},

	tags: ['autodocs']
};

export default preview;
