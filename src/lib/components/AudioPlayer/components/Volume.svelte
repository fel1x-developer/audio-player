<script lang="ts">
	let { volume = $bindable<number>() }: { volume: number } = $props();

	let value = $state(volume * 100);
	$effect(() => {
		volume = value / 100;
	});
</script>

<div class="grid min-h-16 place-items-center">
	<input
		type="range"
		min="0"
		max="100"
		bind:value
		class="slider"
		id="myRange"
		style:background="linear-gradient(90deg, var(--color-volume-used)
		{value}%, var(--color-volume-left)
		{value}%)"
	/>
</div>

<style>
	.slider {
		appearance: none;
		-webkit-appearance: none;
		width: 70%;
		height: 3px;
		border-radius: 5px;
		background: var(--color-volume-slider);
		outline: none;
		opacity: 1;
		-webkit-transition: 0.2s;
		transition: opacity 0.2s;
	}

	.slider::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background: var(--color-volume-slider);
		cursor: pointer;
	}

	.slider::-webkit-slider-thumb:hover {
		background: var(--color-volume-slider);
	}

	.slider::-moz-range-thumb {
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background: var(--color-volume-slider);
		cursor: pointer;
	}
</style>
