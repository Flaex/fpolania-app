---
title: "¿QUÉ ES HTML? LA ESTRUCTURA DE LA INFORMACIÓN (High-Fidelity Overhaul)"
lens: "builder_lens"
language: "es"
---

# ¿QUÉ ES HTML? LA ESTRUCTURA DE LA INFORMACIÓN (High-Fidelity Overhaul)
**Pillar:** Technical Alchemy (The Builder Lens)
**Original Language:** Spanish

## Definición y Especificación
HTML (HyperText Markup Language) es el componente principal de la web. Según el **World Wide Web Consortium (W3C)**, es el lenguaje para describir la **estructura** de las páginas web. Provee a los autores los medios para:
*   Publicar documentos con encabezados, texto, tablas, listas y multimedia.
*   Conectar información mediante enlaces de hipertexto.
*   Diseñar formularios para transacciones remotas, búsquedas y reservas.
*   Incluir aplicaciones directamente en los documentos (hojas de cálculo, video, sonido).

Como bien define **MDN Web Docs**, HTML no es un lenguaje de programación; es un lenguaje de marcado que encapsula partes del contenido para que se comporten de forma determinada (poner en cursiva, agrandar fuentes, redireccionar a otras páginas).

## 1. Anatomía de un Elemento HTML
El lenguaje utiliza etiquetas de marcado para etiquetar piezas de contenido. La mayoría de las etiquetas tienen:
1.  **Etiqueta de apertura:** `<etiqueta>`
2.  **Contenido:** `Este es un título`
3.  **Etiqueta de cierre:** `</etiqueta>`
*Ejemplo:* `<h1>Este es un título</h1>`

### Atributos y Anidación
Los elementos pueden tener **atributos** que contienen información adicional, como `<p class="nota">`, donde `class` es el nombre y `nota` el valor. Este atributo permite conectar el elemento con el sistema de estilos CSS. Además, es posible declarar etiquetas dentro de otras (anidación), lo que permite construir el "esqueleto" jerárquico de la página.

## 2. Estructura Base de un Documento
Un documento estándar sigue este esquema:
```html
<!DOCTYPE html> <!-- Indica la versión HTML5 -->
<html> <!-- Contenedor raíz -->
   <head>
      <title>Título de la página</title> <!-- Meta información -->
   </head>
   <body>
      <h1>Mi Primer título</h1> <!-- Contenido visible -->
      <p>Mi primer párrafo</p>
   </body>
</html>
```
Desde mi metodología, el HTML es la **arquitectura invisible**. Sin una estructura clara, no hay SEO ni accesibilidad, dos pilares críticos para el éxito de cualquier producto digital.
