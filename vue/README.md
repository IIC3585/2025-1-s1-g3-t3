# Documentación general

## Estructura del proyecto

```
src/
├── components/
│ ├── Button.vue
│ ├── Input.vue
│ └── Selection.vue
├── composable/
│ └── useConverter.js
└── App.vue
```
---

## Composable
- **`useConverter.js`**: Composable que contiene la lógica central de conversión de monedas.

---

### Composable: `useConverter`

Este `composable` encapsula toda la lógica del conversor y retorna las siguientes propiedades reactivas y funciones:

| Variable        | Tipo      | Descripción                                                                 |
|-----------------|-----------|-----------------------------------------------------------------------------|
| `amount`        | `Ref`     | Monto ingresado por el usuario.                                            |
| `result`        | `Ref`     | Resultado de la conversión, calculado tras llamar a `convert()`.           |
| `fromCurrency`  | `Ref`     | Código de la moneda de origen que deseo cambiar.                           |
| `toCurrency`    | `Ref`     | Código de la moneda que quiero conocer al convertir.                       |
| `currencies`    | `Ref[]`   | Lista de monedas disponibles para selección.                               |
| `convert()`     | `Function`| Ejecuta la conversión llamando a una API de tasas de cambio.               |
| `clear()`       | `Function`| Resetea los campos del formulario a sus valores iniciales.                 |
| `invert()`      | `Function`| Intercambia los valores entre `fromCurrency` y `toCurrency`.               |

---
## Componentes

### `Input.vue`
Componente de entrada controlada enlazada con `v-model`.
- `label` _(String)_: Texto que acompaña al input.
- `v-model`: Monto vinculado a `amount`.

### `Selection.vue`
Componente reutilizable que representa un `<select>` con opciones de monedas.

- `label` _(String)_: Etiqueta que acompaña al `<select>`.
- `options` _(Array)_: Lista de monedas disponibles.
- `v-model`: Valor seleccionado (`fromCurrency` o `toCurrency`).

### `Button.vue`
Botón reutilizable que acepta un slot y ejecuta una función al hacer click.
- **Slot**: Texto del botón.
- `:onClick`: Función que se ejecuta al hacer click.

---


# Material Consultado 

Vite con vue:  <https://vite.dev/guide/#scaffolding-your-first-vite-project>

# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).
