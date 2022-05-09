<script lang="ts">
  import Drink from "./Drink.svelte";
  import { getDrink } from "../utils/api";
  export let drinks;

  let drink;
  let active: boolean = false;

  const onClick = async (event) => {
    const id = event.target.value;
    drink = await getDrink(id);
    active = active ? (active = false) : (active = true);
  };
</script>

<div class="container">
  {#if active}
    <button class="btn mb" on:click={() => (active = false)}>Go Back</button>
    <Drink {drink} />
  {:else}
    {#each drinks as { strDrinkThumb, strDrink, idDrink } (idDrink)}
      <div class="card">
        <img src={strDrinkThumb} alt={strDrink} />
        <h1>{strDrink}</h1>
        <button class="btn" value={idDrink} on:click={onClick}
          >Go To Drink</button
        >
      </div>
    {/each}
  {/if}
</div>

<style>
  .container {
    width: 80%;
    margin: auto auto;
  }

  .card {
    background: linear-gradient(90deg, #060164 0%, #090979 35%, #0093b0 100%);
    padding: 2rem;
    margin-bottom: 1rem;
    border-radius: 1em;
    color: #eee;
    text-shadow: black 2px 1px;
  }

  img {
    max-width: 100%;
    text-align: center;
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
</style>
