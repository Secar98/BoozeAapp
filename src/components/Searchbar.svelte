<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
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
  <form on:submit|preventDefault={() => {}}>
    <input
      on:keypress={debounce}
      type="text"
      name="searchbar"
      id="searchbar"
      placeholder="Search..."
    />
  </form>
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
