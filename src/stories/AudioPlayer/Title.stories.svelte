<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Title from '$lib/components/AudioPlayer/components/Title.svelte';

	const { Story } = defineMeta({
		title: 'AudioPlayer/Title',
		component: Title,
		argTypes: {
			title: {
				control: 'text',
				description: 'Title of the track'
			}
		}
	});
</script>

<Story name="Primary" args={{ title: 'Holiday' }} />
