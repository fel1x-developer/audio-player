<script lang="ts">
	import type { EventHandler } from 'svelte/elements';

	const { status, title, onclick }: { status: boolean; title: string; onclick: EventHandler } =
		$props();

	let isHovered = $state(false);
	let isActive = $state(status);
</script>

<button
	class="my-1.5 cursor-pointer rounded py-0.5 text-center {isActive
		? 'text-lg'
		: 'text-base'} {isActive
		? 'font-quicksand'
		: 'font-poppins'} bg-playlist-background {isActive || isHovered
		? 'text-playlist-text-hover-active'
		: 'text-playlist-text'}"
	{title}
	{onclick}
	onmouseenter={() => (isHovered = true)}
	onmouseleave={() => (isHovered = false)}
>
	{title}
</button>
