<script>
	import Header from './Header.svelte';
	import "../app.css";
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer class="bg-white shadow-lg">
		<div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
			<h1 class="text-3xl font-bold text-gray-900 text-center">
				AMORA
			</h1>
		</div>
	</footer>
</div>
