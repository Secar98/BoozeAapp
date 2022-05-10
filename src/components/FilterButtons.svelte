<script lang="ts">
  import { getDrinks, getDrinkWithIngredient } from "../utils/api";
  import { shuffleArray } from "../utils/util";
  import { createEventDispatcher } from "svelte";

  export let drinksArray, alcoholicDrinks;

  const dispatch = createEventDispatcher();

  const onClick = async () => {
    alcoholicDrinks = alcoholicDrinks
      ? (alcoholicDrinks = false)
      : (alcoholicDrinks = true);
    const response = await getDrinks(alcoholicDrinks);
    drinksArray = shuffleArray(response.drinks);
    dispatch("alcoholicDrinks", {
      drinksArray,
      alcoholicDrinks,
    });
  };

  const getDrinkByIngredient = async (event) => {
    const ing = event.target.value;
    const response = await getDrinkWithIngredient(ing);
    drinksArray = shuffleArray(response.drinks);
    dispatch("drinksByIngredients", {
      drinksByIngredients: drinksArray,
    });
  };
</script>

<div class="buttons mb">
  <button class="btn" on:click={onClick}
    >{alcoholicDrinks ? "None Alchoholic" : "Alchoholic"}</button
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
