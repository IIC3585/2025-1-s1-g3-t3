import { writable } from 'svelte/store';

export let input_money = writable();
export let converted_money = writable();


export let rates = writable({});
export let currencies = writable([]);
export let old_moneda = writable();
export let new_moneda = writable();