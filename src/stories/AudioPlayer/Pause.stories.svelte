<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Pause from '$lib/components/AudioPlayer/components/Pause.svelte';
	import { fn } from '@storybook/test';

	const { Story } = defineMeta({
		title: 'AudioPlayer/Pause',
		component: Pause,
		args: {
			onclick: fn()
		}
	});
</script>

<Story name="Primary" />
