<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Time from '$lib/components/AudioPlayer/components/Time.svelte';

	const { Story } = defineMeta({
		title: 'AudioPlayer/Time',
		component: Time,
		argTypes: {
			time: {
				control: {
					type: 'text',
					description: 'The current time in seconds'
				}
			}
		}
	});
</script>

<Story name="Primary" args={{ time: '0:00/12:00' }} />
