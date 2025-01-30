<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Next from '$lib/components/AudioPlayer/components/Next.svelte';
	import { fn } from '@storybook/test';

	const { Story } = defineMeta({
		title: 'AudioPlayer/Next',
		component: Next,
		tags: ['autodocs'],
		args: {
			onclick: fn()
		}
	});
</script>

<Story name="Primary" />
