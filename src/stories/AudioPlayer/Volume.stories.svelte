<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Volume from '$lib/components/AudioPlayer/components/Volume.svelte';

	let volume = $state(0.8);

	const { Story } = defineMeta({
		title: 'AudioPlayer/Volume',
		component: Volume,
		tags: ['autodocs'],
		argTypes: {
			volume: {
				control: 'number',
				min: 0,
				max: 1,
				step: 0.01,
				description: 'Volume level'
			}
		}
	});
</script>

<Story name="Primary" args={{ volume: volume }} />
