<script lang="ts">
	import "../styles.css";

	const { time }: { time: string } = $props();
</script>

<h1 class="font-valeraRound text-time-color text-center text-3xl sm:text-right">
	{time}
</h1>
