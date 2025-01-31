import 'dotenv/config';
import type { Config } from 'tailwindcss';

export default {
	darkMode: process.env.STORYBOOK === 'true' ? ['class', '[data-mode="dark"]'] : ['media']
} as Config;
