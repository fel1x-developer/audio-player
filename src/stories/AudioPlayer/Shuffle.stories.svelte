<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Shuffle from '$lib/components/AudioPlayer/components/Shuffle.svelte';
	import { fn } from '@storybook/test';

	const { Story } = defineMeta({
		title: 'AudioPlayer/Shuffle',
		component: Shuffle,
		tags: ['autodocs'],
		argTypes: {
			shuffled: {
				control: {
					type: 'boolean'
				},
				description: 'Whether the shuffle is active or not'
			}
		},
		args: {
			onclick: fn()
		}
	});
</script>

<Story name="Shuffle All" args={{ shuffled: true }} />
<Story name="Shuffle None" args={{ shuffled: false }} />
