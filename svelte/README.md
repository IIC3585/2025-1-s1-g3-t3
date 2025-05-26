# Svelte

## Para correr el proyecto local

```bash
npm install
npm run dev
```

---
## Estructura del proyecto

```
src/
├── routes/
│ ├── +page.svelte
│ ├── Calculator.svelte
│ ├── data.js
│ ├── Header.svelte
│ ├── Input.svelte
│ ├── InvertButton.svelte
│ ├── ResetButton.svelte
│ ├── Results.svelte
│ └── Selection.svelte
├── utils/
│ └── flagEmoji.js
| └── getCountryCode.js
└── app.html
```
---
##  `data.js`

El archivo `data.js` contiene todas las variables de la página, para facilitar el acceso y actualización de estas:

| Variable        | Tipo      | Descripción                                                                |
|-----------------|-----------|----------------------------------------------------------------------------|
| `input_money`   | `writable`| Monto ingresado por el usuario.                                            |
|`converted_money`| `writable`| Resultado de la conversión, calculado tras llamar a `convert()`.           |
| `old_moneda`    | `writable`| Código de la moneda de origen que deseo cambiar.                           |
| `new_moneda`    | `writable`| Código de la moneda que quiero conocer al convertir.                       |
| `currencies`    | `writable`| Lista de monedas disponibles para selección.                               |
| `rates`         | `writable`| Diccionario de monedas disponibles para selección.                         |

---
## Componentes

### `Header.svelte`
Componente que contiene el título de la página.

### `Calculator.svelte`
Componente padre, que hace llamado al resto de las componentes parte de la calculadora. Acá es definida la funcion `convert()`, la cual hace la conversión de monedas, y se llama a la API de conversión.
#### Componentes Hijas:
- `Input.svelte`
- `Selection.svelte`
- `Results.svelte`
- `InvertButton.svelte`
- `ResetButton.svelte`

### `Input.svelte`
Componente `<input>` la cual recibe un `int` para el calculo de la conversión.
- Modifica la variable `input_money`
- Exporta la función `convert()`

### `Selection.svelte`
Componente `<select>` la cual despliega una lista de las monedas disponibles para la conversión.
- Modifica las variables `new_moneda` y `old_moneda`
- Exporta la función `convert()`

### `Results.svelte`
Componente que muestra los resultados de la conversión, incluyendo una bandera del país de la moneda, en caso de tenerla.

### `InvertButton.svelte`
Componente `<button>` la cual ejecuta la función `invertData()` `onclick`. Dicha función invierte la moneda a convertir.
- Modifica las variables `new_moneda`, `old_moneda` y `converted_money`
- Exporta la función `convert()`

### `ResetButton.svelte`
Componente `<button>` la cual ejecuta la función `resetData()` `onclick`, que cambia todas las variables a `null`.
# Referencias:
- https://www.youtube.com/watch?v=8DQailPy3q8&t=83s : tutorial sobre como iniciar un proyecto usando svelte.
- https://dinero.today/pages/api : API para el cambio de moneda.
- https://svelte.dev/tutorial/svelte/select-bindings : tutorial sobre como hacer un selector en svelte.
- https://svelte.dev/tutorial/svelte/stores : tutorial sobre como hacer variables compartidas ("stores").
- https://uiverse.io/cssbuttons-io/evil-monkey-41 : estilo botón
- https://uiverse.io/sekaiking/tidy-starfish-71 : estilo botón
- https://uiverse.io/adamgiebl/ordinary-impala-4 : estilo botón
- https://uiverse.io/kennyotsu-monochromia/spotty-cheetah-65 : estilo fondo
- https://uiverse.io/ariba_9087/slimy-newt-42: estilo fondo


---

# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

