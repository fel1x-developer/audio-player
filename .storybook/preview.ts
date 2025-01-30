import type { Preview } from '@storybook/svelte';
import { withThemeByClassName, withThemeByDataAttribute } from '@storybook/addon-themes';

import '../src/app.css';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	}
};

export const decorators = [
	withThemeByDataAttribute({
		themes: {
			light: 'light',
			dark: 'dark'
		},
		defaultTheme: 'light',
		attributeName: 'data-mode'
	}),
	withThemeByClassName({
		themes: {
			light: 'light',
			dark: 'dark'
		},
		defaultTheme: 'light'
	})
];

export default preview;
