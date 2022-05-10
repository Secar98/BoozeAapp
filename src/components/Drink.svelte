<script lang="ts">
  import { getIngredients, getMeasurements } from "../utils/util";
  export let drink;
  drink = drink.drinks[0];

  const ingredients = getIngredients(drink, "strIngredient");
  const measures = getMeasurements(drink, "strMeasure");

  const ingredientsAndMeasure = ingredients.map((ing, index) => [
    `${ing[1]}: ${measures[index][1] == null ? "" : measures[index][1]}`,
  ]);
</script>

<div class="card">
  <img src={drink.strDrinkThumb} alt={drink.strDrink} />
  <div>
    <h1>{drink.strDrink}</h1>
    <h3>Type: {drink.strCategory}</h3>
    <h3>Glass: {drink.strGlass}</h3>
    <h3>Ingredients:</h3>
    {#each ingredientsAndMeasure as ingList}
      <li>{ingList}</li>
    {/each}
    <h3>Instructions:</h3>
    <p>{drink.strInstructions}</p>
  </div>
</div>

<style>
  img {
    max-width: 100%;
  }

  .card {
    background: linear-gradient(90deg, #060164 0%, #090979 35%, #0093b0 100%);
    padding: 2rem;
    border-radius: 1em;
    color: #eee;
    text-shadow: black 2px 1px;
  }

  @media only screen and (min-width: 768px) {
    .card {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
    img {
      max-width: 80%;
    }
  }
</style>
