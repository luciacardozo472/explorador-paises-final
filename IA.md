# Uso de IA en el proyecto

## Herramienta usada
Claude (chat de Anthropic)

## Prompts principales
- Pedí ayuda paso a paso para instalar el entorno (Node, Git, VS Code, Ionic) y crear el proyecto.

## Qué generó la IA
- Explicaciones y comandos de instalación y configuración (los ejecuté yo).
- Código de `countriesUrl` en `environment.ts` y `environment.prod.ts`, de `provideHttpClient()` en `app.module.ts` y del servicio `countries.ts` (con `@Injectable` y `HttpClient`). Claude me dio el código y yo lo tipeé.
- Claude detectó que mi proyecto usa Angular 22 y que el servicio generado traía `@Service()`, que no admite inyección por constructor, por eso se cambió a `@Injectable({ providedIn: 'root' })`.

## Qué escribí, modifiqué o corregí yo
- Agregué `countriesUrl` en `environment.ts` y `environment.prod.ts` (la explicación de qué es environments fue de Claude, el código lo escribí yo).
- Tipeé el código en mi proyecto, lo guardé y comprobé que compila sin errores.
- nombre las pestañas (Países, Regiones, Comparar) y puse los íconos (`earth-outline`, `map-outline`, `git-compare-outline`).