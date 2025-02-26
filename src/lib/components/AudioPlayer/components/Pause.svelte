<script lang="ts">
	import type { EventHandler } from 'svelte/elements';
	import pauseBtn from '../icons/pause.png';

	import '../styles.css';

	const { onclick }: { onclick: EventHandler } = $props();
</script>

<input
	type="image"
	class="h-12 w-12 transition-transform duration-200 hover:scale-110 hover:cursor-pointer"
	src={pauseBtn}
	{onclick}
	alt="Pause"
/>
