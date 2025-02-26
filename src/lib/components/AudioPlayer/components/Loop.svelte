<script lang="ts">
	import type { EventHandler } from 'svelte/elements';
	import loopCurrentBtn from '../icons/loop_current.png';
	import loopNoneBtn from '../icons/loop_none.png';

	import "../styles.css";

	const { looped, onclick }: { looped: boolean; onclick: EventHandler } = $props();
</script>

<input
	type="image"
	class="hidden h-6 w-6 transition-transform duration-200 hover:scale-110 hover:cursor-pointer sm:block"
	src={looped ? loopCurrentBtn : loopNoneBtn}
	{onclick}
	alt="Loop"
/>
