<script lang="ts">
	import type { Snippet } from 'svelte';

	const { children }: { children: Snippet } = $props();
</script>

<div
	class="no-scroll font-quicksand mx-auto my-5 flex max-h-100 min-h-32 flex-col overflow-x-hidden pr-2.5"
	style:scrollbar-width="none"
>
	{@render children?.()}
</div>

<style>
	.no-scroll::-webkit-scrollbar {
		display: none;
	}
</style>
