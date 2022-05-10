<script lang="ts">
	import { onMount } from "svelte";
	import { getDrinks, getDrinkByName } from "./utils/api";
	import { shuffleArray } from "./utils/util";

	import Drinks from "./components/Drinks.svelte";
	import Searchbar from "./components/Searchbar.svelte";
	import FilterButtons from "./components/FilterButtons.svelte";
	import Footer from "./components/Footer.svelte";

	let drinksArray;
	let alcoholicDrinks: boolean = true;
	let detailedView: boolean = false;

	const onSearch = async (event) => {
		const { search } = event.detail;
		let response;
		if (search) {
			response = await getDrinkByName(search);
			if (response.drinks) {
				drinksArray = shuffleArray(response.drinks);
			} else {
				alert(`Could not find drink with search: ${search}`);
			}
		} else {
			response = await getDrinks(alcoholicDrinks);
			drinksArray = shuffleArray(response.drinks);
		}
	};

	const handleOnDrinksByIngredients = (event) => {
		drinksArray = event.detail.drinksByIngredients;
	};

	const handleOnAlcoholic = (event) => {
		drinksArray = event.detail.drinksArray;
		alcoholicDrinks = event.detail.alcoholicDrinks;
	};

	const handleDetailedView = (event) => {
		detailedView = event.detail.detailedView;
		console.log(detailedView);
	};

	onMount(async () => {
		drinksArray = await getDrinks(alcoholicDrinks);
		drinksArray = shuffleArray(drinksArray.drinks);
	});
</script>

<main>
	<h1 class="header">IDAS BAR</h1>
	<Searchbar on:search={onSearch} />
	{#if !detailedView}
		<FilterButtons
			{drinksArray}
			{alcoholicDrinks}
			on:drinksByIngredients={handleOnDrinksByIngredients}
			on:alcoholicDrinks={handleOnAlcoholic}
		/>
	{/if}
	{#if !drinksArray}
		<h1>Waiting...</h1>
	{:else}
		<Drinks on:detailedView={handleDetailedView} drinks={drinksArray} />
	{/if}
</main>
<Footer />

<style>
	main {
		max-width: 1080px;
		margin: auto;
		padding: 8px;
	}

	.header {
		text-align: center;
		font-size: 3em;
		color: #fff;
		transform: rotate(-2.5deg);
		margin: 1.5rem auto;
		padding: 0.5rem;
		border: 8px dashed #090992;
		border-radius: 1rem;
		width: 90%;
		background-color: #000;
	}
</style>
