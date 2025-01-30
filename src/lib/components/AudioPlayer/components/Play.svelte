<script lang="ts">
	import type { EventHandler } from 'svelte/elements';
	import playBtn from '../icons/play.png';

	const { onclick }: { onclick: EventHandler } = $props();
</script>

<input
	type="image"
	class="h-12 w-12 transition-transform duration-200 hover:scale-110 hover:cursor-pointer"
	src={playBtn}
	{onclick}
	alt="Play"
/>
