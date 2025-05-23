<script setup>
import Selection from './components/Selection.vue';
import { useConverter } from './composable/useConverter';
import Input from './components/Input.vue';
import Button from './components/Button.vue';

const {
  amount,
  result,
  fromCurrency,
  toCurrency,
  currencies,
  convert,
  clear,
  invert
} = useConverter();

</script>

<template>
  <div id="converter-card">
    <h1>Conversor de Monedas</h1>

    <Input id="amount" label="Ingresa tu cantidad:" v-model="amount" />

    <h3>Selecciona el tipo de cambio:</h3>
    <Selection id="from" label="De:" :options="currencies" v-model="fromCurrency" />
    <Selection id="to" label="A:" :options="currencies" v-model="toCurrency" />

    <div class="actions">
      <Button :onClick="convert">Convertir</Button>
      <Button :onClick="clear">Limpiar</Button>
      <Button :onClick="invert">Invertir</Button>
    </div>

    <div v-if="result !== null" class="result">
      <p>{{ amount }} {{ fromCurrency }} = <strong>{{ result }}</strong> {{ toCurrency }}</p>
    </div>
  </div>
</template>

<style scoped>

.actions {
  margin-top: 1rem;
}
.result {
  margin-top: 1.5rem;
  font-size: 1.2rem;
  text-align: center;
}
</style>
