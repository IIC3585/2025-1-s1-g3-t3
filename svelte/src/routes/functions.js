// esto no se ocupo al final
export function convert(){
        // cada vez q se cambia algo, se vuelve a calcular todo --> hay q resetear el converted
        $converted_money = null ;
        if ($input_money && $new_moneda && $old_moneda && $new_moneda in $rates && $old_moneda in $rates){
            // console.log("Puedes convertir")

            const cambio_old = $rates[$old_moneda];
            const cambio_new = $rates[$new_moneda];
            $converted_money = ($input_money * cambio_new/cambio_old).toFixed(2)
        }
    }

export function resetData(){
        $converted_money = null;
        $old_moneda = null;
        $new_moneda = null;
        $input_money = null;
    }

export function invertData(){
        let temp = $converted_money
        $converted_money = $input_money;
        $input_money = temp;
        let temp_moneda = $old_moneda;
        $old_moneda = $new_moneda;
        $new_moneda = temp_moneda;
    }