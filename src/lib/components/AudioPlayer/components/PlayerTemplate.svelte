<script lang="ts">
	import type { Snippet } from 'svelte';

	const { children }: { children: Snippet } = $props();
</script>

<div class="font-quicksand bg-player-background overflow-auto rounded-xl px-5 sm:px-10">
	{@render children?.()}
</div>
