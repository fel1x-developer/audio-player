<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import ButtonsBox from '$lib/components/AudioPlayer/components/ButtonsBox.svelte';

	const { Story } = defineMeta({
		title: 'AudioPlayer/ButtonsBox',
		component: ButtonsBox,
		tags: ['autodocs']
	});
</script>

<Story name="Primary" />
