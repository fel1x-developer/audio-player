<script lang="ts">
	import type { EventHandler } from 'svelte/elements';

	import "../styles.css";

	let {
		value = $bindable(),
		progress,
		drag = $bindable(),
		onmouseup,
		ontouchend
	}: {
		value: number;
		progress: number;
		drag: number;
		onmouseup: EventHandler;
		ontouchend: EventHandler;
	} = $props();
</script>

<div class="my-10 grid place-items-center sm:mt-auto sm:mb-5">
	<input
		type="range"
		min="1"
		max="100"
		step="0.01"
		bind:value
		class="slider h-1 w-full rounded-md"
		id="myRange"
		onchange={() => {
			drag = value;
		}}
		{onmouseup}
		{ontouchend}
		style:background="linear-gradient(90deg, var(--color-progress-used) 0%,
		var(--color-progress-used) {Math.floor(value)}%, var(--color-buffer-loaded) {Math.floor(
			value
		)}%, var(--color-buffer-loaded) {Math.floor(progress)}%, var(--color-progress-left) {Math.floor(
			progress
		)}%, var(--color-progress-left) 100%)"
	/>
</div>

<style>
	.slider {
		appearance: none;
		-webkit-appearance: none;
	}

	.slider::-webkit-slider-thumb {
		-webkit-appearance: none;
		width: 25px;
		height: 25px;
		border-radius: 50%;
		background: var(--color-progress-slider);
		cursor: pointer;
	}

	.slider::-moz-range-thumb {
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background: var(--color-progress-slider);
		cursor: pointer;
	}
</style>
