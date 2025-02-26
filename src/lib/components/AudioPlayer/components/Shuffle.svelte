<script lang="ts">
	import type { EventHandler } from 'svelte/elements';
	import shuffleAllBtn from '../icons/shuffle_all.png';
	import shuffleNoneBtn from '../icons/shuffle_none.png';

	import "../styles.css";

	const { shuffled, onclick }: { shuffled: boolean; onclick: EventHandler } = $props();
</script>

<input
	type="image"
	class="hidden h-6 w-6 transition-transform duration-200 hover:scale-110 hover:cursor-pointer sm:block"
	src={shuffled ? shuffleAllBtn : shuffleNoneBtn}
	{onclick}
	alt="Shuffle"
/>
