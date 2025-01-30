<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import TitleAndTimeBox from '$lib/components/AudioPlayer/components/TitleAndTimeBox.svelte';

	const { Story } = defineMeta({
		title: 'AudioPlayer/TitleAndTimeBox',
		component: TitleAndTimeBox,
		tags: ['autodocs']
	});
</script>

<Story name="Primary" />
