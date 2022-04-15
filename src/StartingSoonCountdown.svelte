<script>
	import Desktop from './Desktop.svelte';
	import StreamStarting from './windows/StreamStarting.svelte';
</script>

<main>
	<svg width="100%" height="100%" viewBox="0 0 960 540">
		<Desktop width="100%" height="100%" background="#8ac6cb">
			<StreamStarting />
		</Desktop>
	</svg>
</main>

<style>
	main {
		width: 100vw;
		height: 100vh;
	}
</style>
