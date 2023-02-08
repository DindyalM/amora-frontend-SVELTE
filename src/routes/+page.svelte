<script>
	import { onMount } from 'svelte';
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';

	let photos = [];

	onMount(async () => {
		const res = await fetch(`https://amora-datapoint.herokuapp.com/`);
		photos = await res.json();
	});

	let photos2 =[]

	onMount(async () => {
		const res = await fetch(`https://amora-datapoint.herokuapp.com/cider`);
		photos2 = await res.json();
	});

	let photos3 =[]

	onMount(async () => {
		const res = await fetch(`https://amora-datapoint.herokuapp.com/f21`);
		photos3 = await res.json();
	});

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<h4>Fashion nova</h4>
<div class="photos">
	{#each photos as photo}
		<figure>
		<a href ={photo.url2} rel ="noreferrer" target="_blank">
				<img src={photo.url} alt={photo.title} width=300 height=300>
		</a>
		</figure>
	{:else}
		<!-- this block renders when photos.length === 0 -->
		<p>loading...</p>
	{/each}
</div>

<h3>Cider</h3>
<div class="photos2">
	{#each photos2 as photo}
		<figure>
		<a href ={photo.url2} rel ="noreferrer" target="_blank">
				<img src={photo.url} alt={photo.title} width=300 height=300>
		</a>
		</figure>
	{:else}
		<!-- this block renders when photos.length === 0 -->
		<p>loading...</p>
	{/each}
</div>

<h3>Forever 21</h3>
<div class="photos3">
	{#each photos3 as photo}
		<figure>
		<a href ={photo.url2} rel ="noreferrer" target="_blank">
				<img src={photo.url} width=300 height=300>
		</a>
		</figure>
	{:else}
		<!-- this block renders when photos.length === 0 -->
		<p>loading...</p>
	{/each}
</div>

<style lang="postcss">
	.photos,.photos2,.photos3 {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-gap: 8px;
	}

	figure, img {
		width: 100%;
		margin: 0;
	}
</style>


