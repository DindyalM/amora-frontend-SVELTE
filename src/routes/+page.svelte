<script>
	import { onMount,onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';

let photos = [];
onMount(async () => {
  if (browser) {
    const localStorageData = localStorage.getItem('fn');
    if (localStorageData) {
      const { data, expiration } = JSON.parse(localStorageData);
      if (Date.now() < expiration) {
        photos = data;
      }
    }
    if (!photos.length) {
      try {
        const res = await fetch(`https://amora-datapoint.herokuapp.com/`);
        const data = await res.json();

        if (data !== []) {
          const expiration = Date.now() + 1 * 60 * 60 * 1000; // set expiration time to 24 hours from now
          localStorage.setItem('fn', JSON.stringify({ data, expiration }));
        }

        photos = data;
      } catch (err) {
        console.log(err)
      }
    }
  }
});

let photos2 = [];
onMount(async () => {
  if (browser) {
    const localStorageData = localStorage.getItem('cider');
    if (localStorageData) {
      const { data, expiration } = JSON.parse(localStorageData);
      if (Date.now() < expiration) {
        photos2 = data;
      }
    }
    if (!photos2.length) {
      try {
        const res = await fetch(`https://amora-datapoint.herokuapp.com/cider`);
        const data = await res.json();

        if (data !== []) {
          const expiration = Date.now() + 1 * 60 * 60 * 1000; // set expiration time to 24 hours from now
          localStorage.setItem('cider', JSON.stringify({ data, expiration }));
        }

        photos2 = data;
      } catch (err) {
        console.log(err)
      }
    }
  }
});

let photos3 =[];
onMount(async () => {
  if (browser) {
    const localStorageData = localStorage.getItem('f21');
    if (localStorageData) {
      const { data, expiration } = JSON.parse(localStorageData);
      if (Date.now() < expiration) {
        photos3 = data;
      }
    }
    if (!photos3.length) {
      try {
        const res = await fetch(`https://amora-datapoint.herokuapp.com/f21`);
        const data = await res.json();

        if (data !== []) {
          const expiration = Date.now() + 1 * 60 * 60 * 1000; // set expiration time to 24 hours from now
          localStorage.setItem('f21', JSON.stringify({ data, expiration }));
        }

        photos3 = data;
      } catch (err) {
        console.log(err)
      }
    }
  }
});

onDestroy(() => {
	if (browser){
  	localStorage.removeItem('cider');
  	localStorage.removeItem('f21');
  	localStorage.removeItem('fn');

	}
});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="a website the scrapes fashion nova and cide and forever 21" content="Amora" />
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


