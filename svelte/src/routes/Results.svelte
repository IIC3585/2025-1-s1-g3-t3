<script>
    import { converted_money } from "./data";
    import { input_money, old_moneda, new_moneda } from "./data";
    import { flagEmoji } from "../utils/flagEmoji.js";
    import { getCountryCode } from "../utils/getCountryCode.js";
</script>
<div>
    <h2>Resultados:</h2>
    <span class="flag">{flagEmoji(getCountryCode($old_moneda))}</span>
    <strong>{$input_money}</strong> {$old_moneda}
    =
    <span class="flag">{flagEmoji(getCountryCode($new_moneda))}</span>
    <strong>{$converted_money}</strong> {$new_moneda}
</div>

<style>
.flag {
  font-size: 1.4rem;
  margin: 0 0.25rem 0 0.5rem;
}
</style>