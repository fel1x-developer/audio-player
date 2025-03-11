<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Progress from '$lib/components/AudioPlayer/components/Progress.svelte';
	import { fn } from '@storybook/test';

	const { Story } = defineMeta({
		title: 'AudioPlayer/Progress',
		component: Progress,
		argTypes: {
			value: {
				control: { type: 'range', min: 0, max: 100, step: 0.01 },
				description: 'The current value of the progress bar'
			},
			progress: {
				control: { type: 'range', min: 0, max: 100, step: 0.01 },
				description: 'The current progress of the audio'
			},
			drag: {
				control: { type: 'range', min: 0, max: 100, step: 0.01 },
				description: 'The current drag value of the progress bar'
			}
		},
		args: {
			onmouseup: fn(),
			ontouchend: fn()
		}
	});
</script>

<Story name="Primary" />
