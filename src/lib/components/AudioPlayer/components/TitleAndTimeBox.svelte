<script lang="ts">
	import type { Snippet } from 'svelte';

	const { children }: { children: Snippet } = $props();
</script>

<div class="mt-8 mb-5 grid grid-cols-1 gap-y-6 sm:grid-cols-[auto_200px]">
	{@render children?.()}
</div>
