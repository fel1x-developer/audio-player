<script lang="ts">
	import type { Snippet } from 'svelte';

	const { children }: { children: Snippet } = $props();
</script>

<div class="mb-8 grid grid-cols-1 md:grid-cols-[auto_30%]">
	{@render children?.()}
</div>
