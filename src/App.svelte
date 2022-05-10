<script lang="ts">
	import { onMount } from "svelte";
	import { getDrinks, getDrinkByName } from "./utils/api";
	import { shuffleArray } from "./utils/util";

	import Drinks from "./components/Drinks.svelte";
	import Searchbar from "./components/Searchbar.svelte";

	let drinksArray;
	let alcoholic: boolean = true;

	const onClick = async () => {
		alcoholic = alcoholic ? (alcoholic = false) : (alcoholic = true);
		const result = await getDrinks(alcoholic);
		drinksArray = shuffleArray(result.drinks);
	};

	const onSearch = async (event) => {
		const { search } = event.detail;
		let result;
		if (search) {
			result = await getDrinkByName(search);
			if (result.drinks) {
				drinksArray = shuffleArray(result.drinks);
			} else {
				alert(`Could not find drink with search: ${search}`);
			}
		} else {
			result = await getDrinks(alcoholic);
			drinksArray = shuffleArray(result.drinks);
		}
	};

	onMount(async () => {
		drinksArray = await getDrinks(alcoholic);
		drinksArray = shuffleArray(drinksArray.drinks);
	});
</script>

<main>
	<h1 class="header">IDAS BAR</h1>
	<Searchbar on:search={onSearch} />
	<button class="btn mb" on:click={onClick}
		>{alcoholic ? "None_Alchoholic" : "Alchoholic"}</button
	>
	{#if !drinksArray}
		<h1>Waiting...</h1>
	{:else}
		<Drinks drinks={drinksArray} />
	{/if}
</main>

<style>
	main {
		max-width: 1080px;
		margin: auto;
	}

	.header {
		text-align: center;
		font-size: 3em;
		color: #fff;
		transform: rotate(-2.5deg);
		margin: 1rem auto;
		padding: 0.5rem;
		border: 8px dashed #090992;
		border-radius: 1rem;
		width: 90%;
		background-color: #000;
	}

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
