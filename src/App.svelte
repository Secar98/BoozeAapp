<script lang="ts">
	import { onMount } from "svelte";

	import Drinks from "./components/Drinks.svelte";
	import { getDrinks } from "./utils/api";

	let drinksArray;
	let alcoholic: boolean = true;

	const onClick = async () => {
		alcoholic = alcoholic ? (alcoholic = false) : (alcoholic = true);
		drinksArray = await getDrinks(alcoholic);
	};

	onMount(async () => {
		drinksArray = await getDrinks(alcoholic);
	});
</script>

<main>
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
