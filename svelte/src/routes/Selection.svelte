<script>
    export let convert;
    export let rate;
    export let text;
    import { currencies } from "./data";
</script>

<div class="select-group">
    <h3>{text}:</h3>
    <div class="select-wrapper">
      <select
      class="select"
		  bind:value={$rate}
        onchange={convert}>
        {#each $currencies as curr}
				<option value={curr}>{curr}</option>
		  {/each}
      </select>
    </div>
    
</div>

<style>
  .select-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
  .select-wrapper select {
  background-color: #eee;
  border: none;
  padding: 1rem;
  font-size: 1rem;
  width: 6em;
  border-radius: 1rem;
  color: hsl(345deg 100% 47%);
  box-shadow: 0 0.4rem #dfd9d9;
  cursor: pointer;
}

.select-wrapper select:focus {
  outline-color: hsl(345deg 100% 47%);
}
</style>