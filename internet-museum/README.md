# Internet Museum

Prototipo independiente para probar una nueva sección de `roberttsOS` sin modificar la portada actual.

## Abrir

Abre `internet-museum/index.html` o sirve el repositorio con cualquier servidor estático.

## Estructura

- `index.html`: shell de la experiencia, mapa, pasaporte, modal y archivo final.
- `assets/styles.css`: sistema visual, recreaciones CSS, animaciones y responsive.
- `assets/museum.js`: datos de salas y artefactos, renderizado, audio, logros y persistencia.
- `assets/audio/`: archivos históricos opcionales y documentación de nombres/licencias.

## Modelo de experiencia

El progreso se calcula con 28 descubrimientos:

- 5 salas visitadas.
- 15 archivos abiertos.
- 5 señales sonoras escuchadas.
- 3 objetos ocultos encontrados.

El estado se guarda en `localStorage` con la clave `robertts_internet_museum_v1`.

## Componentes

- Lobby con acceso guiado y artefacto oculto.
- Mapa de cinco salas.
- Líneas temporales horizontales.
- Tarjetas expandibles en un `dialog` nativo.
- Microexperiencias: zumbido, BIOS, terminal, Snake, PictoChat y arqueología web.
- Sonidos sintéticos opcionales mediante Web Audio.
- Pasaporte con rango, progreso y cinco logros.
- Archivo final desbloqueable.

## Imágenes y contenido histórico

La prueba utiliza recreaciones hechas con HTML y CSS para funcionar sin dependencias ni material de terceros. Para producción se recomienda crear `assets/images/`, añadir material propio o con licencia y conservar en los datos:

```js
{
  visual: '<img src="assets/images/archivo.webp" alt="Descripcion precisa">',
  sound: "identificador-del-sonido"
}
```

Antes de publicar capturas, logotipos o sonidos originales, conviene revisar derechos de uso y añadir créditos y fuentes históricas.

## Integración futura

Cuando la prueba esté aprobada, puede añadirse un acceso desde `index.html` que abra `internet-museum/`, siguiendo el patrón de los iconos actuales de escritorio y del menú Inicio.
