import { ref, onMounted } from 'vue';

export function useConverter() {
  const rates = ref({});
  const currencies = ref([]);
  const amount = ref(0);
  const result = ref(null);
  const fromCurrency = ref('');
  const toCurrency = ref('');

  onMounted(async () => {
    try {
      const res = await fetch('https://cdn.dinero.today/api/latest.json');
      const data = await res.json();
      rates.value = data.rates;
      currencies.value = Object.keys(rates.value).sort();
    } catch (err) {
      console.error('Error al cargar tasas:', err);
    }
  });

  const convert = () => {
    if (!rates.value[fromCurrency.value] || !rates.value[toCurrency.value]) return;
    const value = (amount.value / rates.value[fromCurrency.value]) * rates.value[toCurrency.value];
    result.value = value.toFixed(2);
  };

  const invert = () => {
    [fromCurrency.value, toCurrency.value] = [toCurrency.value, fromCurrency.value];
    convert();
  };

  const clear = () => {
    amount.value = 0;
    result.value = null;
    fromCurrency.value = null;
    toCurrency.value = null
  };

  return {
    rates,
    currencies,
    amount,
    result,
    fromCurrency,
    toCurrency,
    convert,
    invert,
    clear
  };
}
