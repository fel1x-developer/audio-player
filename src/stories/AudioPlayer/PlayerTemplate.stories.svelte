<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import PlayerTemplate from '$lib/components/AudioPlayer/components/PlayerTemplate.svelte';

	const { Story } = defineMeta({
		title: 'AudioPlayer/PlayerTemplate',
		component: PlayerTemplate,
		tags: ['autodocs']
	});
</script>

<Story name="Primary" />
