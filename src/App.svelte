<script lang="ts">
	import { onMount } from "svelte";
	import {
		getDrinks,
		getDrinkByName,
		getDrinkWithIngredient,
	} from "./utils/api";
	import { shuffleArray } from "./utils/util";

	import Drinks from "./components/Drinks.svelte";
	import Searchbar from "./components/Searchbar.svelte";

	let drinksArray;
	let alcoholic: boolean = true;

	const onClick = async () => {
		alcoholic = alcoholic ? (alcoholic = false) : (alcoholic = true);
		const response = await getDrinks(alcoholic);
		drinksArray = shuffleArray(response.drinks);
	};

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
			response = await getDrinks(alcoholic);
			drinksArray = shuffleArray(response.drinks);
		}
	};

	const getDrinkByIngredient = async (e) => {
		const ing = e.target.value;
		const response = await getDrinkWithIngredient(ing);
		drinksArray = response.drinks;
	};

	onMount(async () => {
		drinksArray = await getDrinks(alcoholic);
		drinksArray = shuffleArray(drinksArray.drinks);
	});
</script>

<main>
	<h1 class="header">IDAS BAR</h1>
	<Searchbar on:search={onSearch} />
	<div class="buttons mb">
		<button class="btn" on:click={onClick}
			>{alcoholic ? "None Alchoholic" : "Alchoholic"}</button
		>
		<button class="btn" value="Gin" on:click={getDrinkByIngredient}>Gin</button>
		<button class="btn" value="Vodka" on:click={getDrinkByIngredient}
			>Vodka</button
		>
		<button class="btn" value="Amaretto" on:click={getDrinkByIngredient}
			>Amaretto</button
		>
		<button class="btn" value="Rum" on:click={getDrinkByIngredient}>Rum</button>
		<button class="btn" value="Tequila" on:click={getDrinkByIngredient}
			>Tequila</button
		>
	</div>
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

	button:hover {
		background-color: #2b2b2b;
		transition: 0.3s;
	}

	.mb {
		margin-bottom: 1rem;
	}

	.buttons {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
	}

	@media only screen and (max-width: 512px) {
		.buttons {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 1rem;
		}
	}

	@media only screen and (max-width: 375px) {
		.buttons {
			display: grid;
			grid-template-columns: 1fr;
			gap: 1rem;
		}
	}
</style>
