<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  let val = "";
  let timer;

  const debounce = (e) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      dispatch("search", {
        search: e.target.value,
      });
    }, 750);
  };
</script>

<div>
  <input
    on:keyup={debounce}
    type="text"
    name="searchbar"
    id="searchbar"
    placeholder="Search..."
  />
</div>

<style>
  #searchbar {
    display: flex;
    padding: 1rem;
    font-size: 1.2em;
    margin: 10px auto;
    border: 1px solid #000;
    border-radius: 1rem;
    width: 90%;
  }

  @media only screen and (min-width: 768px) {
    #searchbar {
      max-width: 512px;
    }
  }
</style>
