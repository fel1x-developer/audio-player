<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import PlaylistTemplate from '$lib/components/AudioPlayer/components/PlaylistTemplate.svelte';

	const { Story } = defineMeta({
		title: 'AudioPlayer/PlaylistTemplate',
		component: PlaylistTemplate,
		tags: ['autodocs']
	});
</script>

<Story name="Primary" />
