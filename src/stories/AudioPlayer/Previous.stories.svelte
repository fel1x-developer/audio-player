<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Previous from '$lib/components/AudioPlayer/components/Previous.svelte';
	import { fn } from '@storybook/test';

	const { Story } = defineMeta({
		title: 'AudioPlayer/Previous',
		component: Previous,
		args: {
			onclick: fn()
		}
	});
</script>

<Story name="Primary" />
