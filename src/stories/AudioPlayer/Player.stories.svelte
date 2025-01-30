<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Player from '$lib/components/AudioPlayer/Player.svelte';

	const { Story } = defineMeta({
		title: 'AudioPlayer/Player',
		component: Player,
		tags: ['autodocs'],
		argTypes: {
			trackList: {
				control: 'object',
				description: 'List of tracks to play'
			}
		}
	});
</script>

<Story name="Primary" />
