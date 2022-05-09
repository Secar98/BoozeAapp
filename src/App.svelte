<script lang="ts">
	import { onMount } from "svelte";
	import { getDrinks, getDrinkByName } from "./utils/api";

	import Drinks from "./components/Drinks.svelte";
	import Searchbar from "./components/Searchbar.svelte";

	let drinksArray;
	let alcoholic: boolean = true;

	const onClick = async () => {
		alcoholic = alcoholic ? (alcoholic = false) : (alcoholic = true);
		drinksArray = await getDrinks(alcoholic);
	};

	const onSearch = async (event) => {
		const { search } = event.detail;
		if (search) {
			const result = await getDrinkByName(search);
			if (result.drinks) {
				drinksArray = result;
			}
		} else {
			drinksArray = await getDrinks(alcoholic);
		}
	};

	onMount(async () => {
		drinksArray = await getDrinks(alcoholic);
	});
</script>

<main>
	<Searchbar on:search={onSearch} />
	<button class="btn mb" on:click={onClick}
		>{alcoholic ? "None_Alchoholic" : "Alchoholic"}</button
	>
	{#if !drinksArray}
		<h1>Waiting...</h1>
	{:else}
		<Drinks drinks={drinksArray.drinks} />
	{/if}
</main>

<style>
	.btn {
		background-color: #000;
		color: #fff;
		font-size: 1.2em;
		padding: 1rem;
		cursor: pointer;
		border: none;
		border-radius: 1.5em;
	}

	.mb {
		margin-bottom: 1rem;
	}
</style>
