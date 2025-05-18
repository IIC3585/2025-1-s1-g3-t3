<script>
    import { input_money, converted_money, old_moneda, new_moneda, currencies, rates } from './data.js';
    import { onMount } from 'svelte';
    import Input from './Input.svelte';
    import Selection from './Selection.svelte';
    import Results from './Results.svelte';
    import InvertButton from './InvertButton.svelte';
    import ResetButton from './ResetButton.svelte';

    function convert(){
        // console.log($input_money, $new_moneda,  $old_moneda);
        // cada vez q se cambia algo, se vuelve a calcular todo --> hay q resetear el converted
        $converted_money = null ;
        if ($input_money && $new_moneda && $old_moneda && $new_moneda in $rates && $old_moneda in $rates){
            // console.log("Puedes convertir")

            const cambio_old = $rates[$old_moneda];
            const cambio_new = $rates[$new_moneda];
            $converted_money = ($input_money * cambio_new/cambio_old).toFixed(2)
        }
    }

    onMount(async () => {
		try {
			const res = await fetch('https://cdn.dinero.today/api/latest.json');
			const data = await res.json();
			$rates = data.rates;
			$currencies = Object.keys($rates).sort();
            // console.log($rates)
            // console.log($currencies)
            
		} catch (err) {
			console.error('Error al cargar tasas:', err);
		}
	});
</script>

<div class="form-container">
    <Input convert={convert}/>
    <h2>Selecciona el tipo de cambio:</h2>
    <div class="selections-container">
        <Selection text={'De'} convert={convert} rate={old_moneda}/>
        <Selection text={'A'} convert={convert} rate={new_moneda}/>
    </div>
    
    <Results/>
    <InvertButton/>
    <ResetButton/>

</div>

<style>
    .selections-container {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        gap: 1rem;
    }

    .form-container {
        margin-top: 1px;
        /* background-color: lightgray; */
        /* border: 2px solid hsl(345deg 100% 47%) !important;
        border-radius: 20px; */
        padding: 2%;
    }
</style>