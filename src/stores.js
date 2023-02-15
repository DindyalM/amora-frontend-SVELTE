import { writable } from 'svelte/store';

const res = await fetch(`https://amora-datapoint.herokuapp.com/`);
let resp = await res.json();

export const fashion = writable(resp);
