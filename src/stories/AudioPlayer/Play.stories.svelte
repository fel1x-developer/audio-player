<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Play from '$lib/components/AudioPlayer/components/Play.svelte';
	import { fn } from 'storybook/test';

	const { Story } = defineMeta({
		title: 'AudioPlayer/Play',
		component: Play,
		args: {
			onclick: fn()
		}
	});
</script>

<Story name="Primary" />
