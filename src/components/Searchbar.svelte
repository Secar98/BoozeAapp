<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  let timer;

  const debounce = (event) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      dispatch("search", {
        search: event.target.value,
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
    color: #fff;
    outline: none;
    padding: 1rem;
    font-size: 1.2em;
    margin: 1.5rem auto;
    border: 2px solid #000;
    border-radius: 1rem;
    width: 90%;
    background: linear-gradient(90deg, #060164 0%, #090979 35%, #0093b0 100%);
  }

  #searchbar::placeholder {
    color: #fff;
  }

  @media only screen and (min-width: 768px) {
    #searchbar {
      max-width: 512px;
    }
  }
</style>
