<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import PageTemplate from '$lib/components/AudioPlayer/components/PageTemplate.svelte';

	const { Story } = defineMeta({
		title: 'AudioPlayer/PageTemplate',
		component: PageTemplate,
		tags: ['autodocs']
	});
</script>

<Story name="Primary" />
