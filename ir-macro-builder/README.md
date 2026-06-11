<div align="center">

# Flipper IR Macro Builder

### Convierte varios botones infrarrojos en una sola acción

**Busca un mando, combina señales, ajusta los tiempos y exporta un macro listo para llevar a tu Flipper Zero. Todo desde el navegador.**

[![Abrir IR Macro Builder](https://img.shields.io/badge/ABRIR-IR_MACRO_BUILDER-ff6b00?style=for-the-badge&logo=javascript&logoColor=050608)](https://roberttsOS.github.io/ir-macro-builder/)
[![Volver a roberttsOS](https://img.shields.io/badge/VOLVER-roberttsOS-111420?style=for-the-badge&logo=githubpages&logoColor=00ff9d)](https://roberttsOS.github.io/)

</div>

---

## Un botón para toda una secuencia

Flipper IR Macro Builder es una herramienta visual para construir secuencias infrarrojas sin escribir manualmente cada señal.

Puedes seleccionar botones de distintos mandos, ordenarlos, ajustar la pausa entre acciones y convertir el resultado en un archivo para Flipper Zero o en código C para continuar desarrollando una aplicación.

> Encender el televisor, cambiar la entrada y ajustar el volumen puede convertirse en una sola acción.

## Qué permite hacer

- Explorar una amplia colección de mandos organizada por marca y modelo.
- Buscar rápidamente dentro del catálogo.
- Ver todos los botones disponibles de cada mando.
- Combinar señales de diferentes dispositivos en el mismo macro.
- Ajustar el retraso individual entre acciones.
- Reordenar la secuencia mediante arrastrar y soltar.
- Duplicar señales y configurar repeticiones.
- Previsualizar cómo aparecerá el macro en Flipper Zero.
- Consultar estadísticas de señales, duración y tamaño estimado.
- Copiar o descargar el resultado como `.ir`.
- Generar y descargar una base en C para una aplicación `.fap`.

## Flujo de trabajo

1. Selecciona la marca y el modelo del mando.
2. Pulsa los botones que quieras añadir.
3. Ordena la secuencia y ajusta los tiempos.
4. Asigna un nombre al macro.
5. Descarga el archivo `.ir`.
6. Copia el archivo en `SD/infrared/` dentro de la tarjeta del Flipper.
7. Abre el archivo desde la aplicación Infrared.

## Dos formas de exportar

### Archivo `.ir`

La opción directa para utilizar la secuencia como un mando guardado. El macro aparece como un único botón que reproduce todas las señales configuradas.

### Código C

Genera una base de aplicación para trabajar con el SDK de Flipper Zero, incluyendo las señales, la secuencia y una interfaz inicial.

## Interfaz

La herramienta mantiene la identidad visual de roberttsOS, pero cambia el verde del sistema por un naranja inspirado en Flipper Zero:

- Paneles de selección y búsqueda.
- Constructor de secuencias mediante drag and drop.
- Vista previa de la pantalla del dispositivo.
- Generador de código en tiempo real.
- Diseño adaptable para escritorio y móvil.

## Tecnología

- HTML, CSS y JavaScript sin frameworks.
- Parser de archivos `.ir`.
- Generación local de archivos mediante `Blob`.
- Drag and drop nativo.
- Catálogo remoto con fallback a GitHub.
- Sin instalación, cuenta de usuario ni envío de datos.

## Estructura

```text
ir-macro-builder/
├── index.html
└── README.md
```

El constructor consulta los archivos infrarrojos del proyecto y genera todo el resultado localmente en el navegador.

## Aviso

Comprueba que tienes permiso para controlar el dispositivo utilizado. La herramienta está pensada para aprendizaje, automatización personal y equipos propios.

Flipper Zero es una marca de sus respectivos propietarios. Este proyecto es una herramienta independiente y no oficial.

<div align="center">

## Construye tu primera secuencia

**[ABRIR IR MACRO BUILDER](https://roberttsOS.github.io/ir-macro-builder/)**

`infrared sequence: ready`

</div>
