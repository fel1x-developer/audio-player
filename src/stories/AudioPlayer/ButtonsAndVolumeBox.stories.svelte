<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import ButtonsAndVolumeBox from '$lib/components/AudioPlayer/components/ButtonsAndVolumeBox.svelte';

	const { Story } = defineMeta({
		title: 'AudioPlayer/ButtonsAndVolumeBox',
		component: ButtonsAndVolumeBox,
		tags: ['autodocs']
	});
</script>

<Story name="Primary" />
