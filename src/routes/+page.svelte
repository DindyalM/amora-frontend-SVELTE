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
        photos = JSON.parse(localStorageData);
      } else {
        try {
          const res = await fetch(`https://amora-datapoint.herokuapp.com/`);
          const data = await res.json();

					if(data!==[]){
          	localStorage.setItem('fn', JSON.stringify(data));
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
        photos2 = JSON.parse(localStorageData);
      } else {
        try {
          const res = await fetch(`https://amora-datapoint.herokuapp.com/cider`);
          const data = await res.json();
					if(data!=[]){
          	localStorage.setItem('cider', JSON.stringify(data));
					}
          photos2 = data;
        } catch (err) {
          console.log(err)
        }
      }
    }
  });

	let photos3 =[]

	onMount(async () => {
    if (browser) {
      const localStorageData = localStorage.getItem('f21');
      if (localStorageData) {
        photos3 = JSON.parse(localStorageData);
      } else {
        try {
          const res = await fetch(`https://amora-datapoint.herokuapp.com/f21`);
          const data = await res.json();
					if(data!=[]){
          	localStorage.setItem('f21', JSON.stringify(data));
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


