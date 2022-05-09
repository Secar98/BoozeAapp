<script lang="ts">
	import { onMount } from "svelte";

	import Drinks from "./components/Drinks.svelte";
	import { getDrinks } from "./utils/api";

	let drinksArray;
	let alcoholic: boolean = true;
	let active: boolean = true;

	const onClick = () => {
		alcoholic = alcoholic ? (alcoholic = false) : (alcoholic = true);
		getDrinks(alcoholic).then((data) => (drinksArray = data));
	};

	onMount(() => {
		getDrinks(alcoholic).then((data) => (drinksArray = data));
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
