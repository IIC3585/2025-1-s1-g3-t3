<!-- Este no se ocupo al final -->
<script>
    import { onMount } from 'svelte';
    let rates = $state({});
	let currencies = $state([]);
    let old_moneda = $state();
    let new_moneda = $state();
    let input_money = $state();
    let converted_money = $state();

    function convert(){
        // cada vez q se cambia algo, se vuelve a calcular todo --> hay q resetear el converted
        converted_money = null ;
        if (input_money && new_moneda && old_moneda && new_moneda in rates && old_moneda in rates){
            // console.log("Puedes convertir")

            const cambio_old = rates[old_moneda];
            const cambio_new = rates[new_moneda];
            converted_money = (input_money * cambio_new/cambio_old).toFixed(2)
        }
    }

    function resetData(){
        converted_money = null;
        old_moneda = null;
        new_moneda = null;
        input_money = null;
    }

    function invertData(){
        let temp = converted_money
        converted_money = input_money;
        input_money = temp;
        let temp_moneda = old_moneda;
        old_moneda = new_moneda;
        new_moneda = temp_moneda;
    }
    onMount(async () => {
		try {
			const res = await fetch('https://cdn.dinero.today/api/latest.json');
			const data = await res.json();
			rates = data.rates;
			currencies = Object.keys(rates).sort();
			// convert();
            // console.log(rates)
            // console.log(currencies)
            
		} catch (err) {
			console.error('Error al cargar tasas:', err);
		}
	});
</script>

<div>
    <h2>Ingresa tu cantidad:</h2>
    <input type="number" bind:value={input_money} onchange={convert}/>
    <h2>Selecciona el tipo de cambio:</h2>
    <h3>De:</h3>
    <select
		bind:value={old_moneda}
        onchange={convert}>
        {#each currencies as curr}
				<option value={curr}>{curr}</option>
		{/each}
    </select>
    <h3>A:</h3>
    <select
		bind:value={new_moneda}
        onchange={convert}>
        {#each currencies as curr}
				<option value={curr}>{curr}</option>
		{/each}
    </select>
    <h2>Resultados:</h2>
    <h4>{converted_money}</h4>

    <button onclick={invertData}>Invertir</button>
    <button onclick={resetData}>Reset Data</button>


</div>

<style>
    
</style>