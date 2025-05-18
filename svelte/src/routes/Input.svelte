<script>
    export let convert;
    import { input_money } from "./data";
</script>

<div>
    <h2>Ingresa tu cantidad:</h2>
    <div class="input-wrapper">
        <input class="input" placeholder="Número" type="number" bind:value={$input_money} onchange={convert}/>
    </div>
</div>

<style>
    /* From Uiverse.io by adamgiebl */ 
.input-wrapper input {
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

.input-wrapper input:focus {
  outline-color: hsl(345deg 100% 47%);
}
</style>