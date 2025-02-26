<script lang="ts">
	import '../styles.css';

	const { title }: { title: string } = $props();
</script>

<h1 class="title text-title-color w-full text-center text-2xl sm:w-auto sm:text-left">
	{title}
</h1>
