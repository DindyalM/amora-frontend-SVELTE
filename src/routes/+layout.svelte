<script>
	import Header from './Header.svelte';
	import "../app.css";
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
	<h4 class= "text-3xl font-bold underline">more soon!</h4>
	</footer>
</div>

