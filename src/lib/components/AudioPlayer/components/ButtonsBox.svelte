<script lang="ts">
	import type { Snippet } from 'svelte';

	const { children }: { children: Snippet } = $props();
</script>

<div class="grid grid-cols-[repeat(3,auto)] place-items-center md:grid-cols-[repeat(5,auto)]">
	{@render children?.()}
</div>
