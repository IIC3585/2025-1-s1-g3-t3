# Tarea 3

## Descripción General

Este repositorio contiene a dos proyectos (uno en Vue y otro en Svelte), donde ambos se tratan de realizar conversión entre dos tipos de monedas por medio de una API. 
Cada proyecto posee su propia documentación en el README de su respectiva carpeta.

## Deploy
Para el deploy de ambas páginas se usó Vercel y se pueden visitar en los siguientes links:  
- Svelte: <https://2025-1-s1-g3-t3.vercel.app/>  
- Vue: <https://2025-1-s1-g3-t3-26kv.vercel.app/>

## API
Para el uso de la API de conversión de moneda, hay que hacer un `fetch` a la siguiente dirección: `https://cdn.dinero.today/api/latest.json`

Esto devolvera lo siguiente:
```
{
    "base": "USD",
    "rates": {
        "AED": 3.67297,
        "AFN": 89.647021,
        "ALL": 104.709024,
        "AMD": 476.665393,
        "ANG": 1.789593,
        "AOA": 597.455,
        "ARS": 99.2347,
        "AUD": 1.338279,
        [supporting 183+ currencies ...]
    },
}

```
Source: https://dinero.today/pages/api
