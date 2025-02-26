<script lang="ts">
	import type { EventHandler } from 'svelte/elements';
	import previousBtn from '../icons/previous.png';

	import "../styles.css";

	const { onclick }: { onclick: EventHandler } = $props();
</script>

<input
	type="image"
	class="h-10 w-10 transition-transform duration-200 hover:scale-110 hover:cursor-pointer"
	src={previousBtn}
	{onclick}
	alt="Previous"
/>
