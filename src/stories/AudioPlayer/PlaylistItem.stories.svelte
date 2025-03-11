<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import PlaylistItem from '$lib/components/AudioPlayer/components/PlaylistItem.svelte';
	import { fn } from '@storybook/test';

	const { Story } = defineMeta({
		title: 'AudioPlayer/PlaylistItem',
		component: PlaylistItem,
		argTypes: {
			status: {
				control: 'boolean',
				description: 'Status of the track'
			},
			title: {
				control: 'text',
				description: 'Title of the track'
			}
		},
		args: {
			onclick: fn()
		}
	});
</script>

<Story name="Active" args={{ status: true, title: 'Holiday' }} />
<Story name="Inactive" args={{ status: false, title: 'Holiday' }} />
