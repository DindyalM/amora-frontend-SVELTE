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
        if(data.length){
         photos = data;
        }
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
        if(data.length){
         photos2 = data;
        }
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
       if(data.length){
         photos3 = data;
        }
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

<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <h4 class="text-center font-bold text-lg p-4 bg-gray-100">Fashion Nova</h4>
    <div class="p-4">
      {#each photos as photo}
        <figure class="mb-4">
          <a href={photo.url2} rel="noreferrer" target="_blank">
            <img src={photo.url} alt={photo.title} class="w-full h-auto md:max-w-none object-cover">
          </a>
        </figure>
      {:else}
        <p class="text-center">Loading...</p>
      {/each}
    </div>
  </div>

  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <h4 class="text-center font-bold text-lg p-4 bg-gray-100">Cider</h4>
    <div class="p-4">
      {#each photos2 as photo}
        <figure class="mb-4">
          <a href={photo.url2} rel="noreferrer" target="_blank">
            <img src={photo.url} alt={photo.title} class="w-full h-auto md:max-w-none object-cover">
          </a>
        </figure>
      {:else}
        <p class="text-center">Loading...</p>
      {/each}
    </div>
  </div>

  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <h4 class="text-center font-bold text-lg p-4 bg-gray-100">Forever 21</h4>
    <div class="p-4">
      {#each photos3 as photo}
        <figure class="mb-4">
          <a href={photo.url2} rel="noreferrer" target="_blank">
            <img src={photo.url} alt={photo.title} class="w-full h-auto md:max-w-none object-cover">
          </a>
        </figure>
      {:else}
        <p class="text-center">Loading...</p>
      {/each}
    </div>
  </div>
</div>





