# Uso de IA en el proyecto

## Herramienta usada
Claude (chat de Anthropic)

## Prompts principales
- Pedí ayuda paso a paso para instalar el entorno (Node, Git, VS Code, Ionic) y crear el proyecto.

## Qué generó la IA
- Explicaciones y comandos de instalación y configuración (los ejecuté yo).
- Código de `countriesUrl` en `environment.ts` y `environment.prod.ts`, de `provideHttpClient()` en `app.module.ts` y del servicio `countries.ts` (con `@Injectable` y `HttpClient`). Claude me dio el código y yo lo tipeé.
- Claude detectó que mi proyecto usa Angular 22 y que el servicio generado traía `@Service()`, que no admite inyección por constructor, por eso se cambió a `@Injectable({ providedIn: 'root' })`.
- Código de `tab1.page.ts` y `tab1.page.html` (lista de países con spinner y mensaje de error). Claude me lo dio y yo lo tipeé.
- Claude me explicó que la pantalla no se actualizaba porque Angular 21+ trabaja sin Zone.js, y me indicó agregar `ChangeDetectorRef` con `markForCheck()`.
- Claude me indicó quitar `[fullscreen]="true"` y `[translucent]="true"` para que no se tapara la barra de desplazamiento.
- Código de la pestaña Regiones (`tab2.page.ts` y `tab2.page.html`): `ion-segment` para elegir la región, `ion-badge` con el contador y la lista filtrada. Claude me lo dio y yo lo tipeé.
- Claude revisó el archivo de datos y me avisó que no trae población, por eso la comparación usa capital, superficie, idiomas, monedas, países limítrofes y salida al mar.
- Rediseño visual de la pestaña Regiones: HTML (`tab2.page.html`) y estilos (`tab2.page.scss`) con encabezado, pestañas redondeadas, contador y lista con flechas. Claude me lo dio y yo lo tipeé.

## Qué escribí, modifiqué o corregí yo
- Agregué `countriesUrl` en `environment.ts` y `environment.prod.ts` (la explicación de qué es environments fue de Claude, el código lo escribí yo).
- Tipeé el código en mi proyecto, lo guardé y comprobé que compila sin errores.
- nombre las pestañas (Países, Regiones, Comparar) y puse los íconos (`earth-outline`, `map-outline`, `git-compare-outline`).
- Probé la app, revisé la consola del navegador y pasé los errores a Claude para encontrar el problema.
- Corregí el nombre de la pestaña a "Países" (con tilde) en `tabs.page.html`.
- Código de las banderas con `ion-avatar` en `tab1.page.html` (usa imágenes de flagcdn.com).
- Detecté que la lista de países se repetía dos veces y pegué mi archivo para encontrar el error.
- La idea de agregar un buscador en la pestaña Países fue mía.
- Detecté que la barra de desplazamiento quedaba tapada por el encabezado y apliqué el arreglo.
- Probé cada región en la app y comprobé que la lista y el contador cambian correctamente.
- le pedi a claude que me explique el Código de la pestaña Comparar (`tab3.page.ts` y `tab3.page.html`): y utilice `ion-select` para elegir dos países y `ion-card` para mostrar sus datos.
- Probé la comparación con distintos pares de países y comprobé que las tarjetas se actualizan.
- Pegué por error el HTML de Regiones en la pestaña Comparar, vi el error de compilación y lo recuperé con `git restore`.
- Pedí yo el rediseño y las mejoras de la pantalla Regiones.