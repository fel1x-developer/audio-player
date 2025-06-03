<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { fn } from 'storybook/test';

	import Loop from '$lib/components/AudioPlayer/components/Loop.svelte';

	const { Story } = defineMeta({
		title: 'AudioPlayer/Loop',
		component: Loop,
		argTypes: {
			looped: {
				control: {
					type: 'boolean'
				},
				description: 'Whether the audio should loop'
			}
		},
		args: {
			onclick: fn()
		}
	});
</script>

<Story name="Loop Current" args={{ looped: true }} />
<Story name="Loop None" args={{ looped: false }} />
