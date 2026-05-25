---
title: "¿QUÉ ES HTML? LA ESTRUCTURA DE LA INFORMACIÓN"
lens: "builder_lens"
image: "https://res.cloudinary.com/flaex/image/upload/v1627500628/strapi/flaex_partes_de_un_html_335be98ff9.jpg"
language: "es"
pillar: "Technical Alchemy (The Builder Lens)"
originalLanguage: "Spanish"
---

## Definición y Especificación

HTML (HyperText Markup Language) es el componente principal de la web. Según el **World Wide Web Consortium (W3C)**, es el lenguaje para describir la **estructura** de las páginas web. Provee a los autores los medios para:

- Publicar documentos con encabezados, texto, tablas, listas y multimedia.
- Conectar información mediante enlaces de hipertexto.
- Diseñar formularios para transacciones remotas, búsquedas y reservas.
- Incluir aplicaciones directamente en los documentos (hojas de cálculo, video, sonido).

Como bien define **MDN Web Docs**, HTML no es un lenguaje de programación; es un lenguaje de marcado que encapsula partes del contenido para que se comporten de forma determinada (poner en cursiva, agrandar fuentes, redireccionar a otras páginas).

> _HTML es el lenguaje para describir la estructura de las páginas web, brinda a los autores los medios para:_

_- Publicar documentos en línea con encabezados, texto, tablas, listas, fotos, entre otros elementos._

_- Obtener información en línea a través de enlaces de hipertexto, con el clic de un botón._

_- Diseñar formularios para realizar transacciones con servicios remotos, buscar información, hacer reservas, ordenar productos, entre otras tareas._
_- Incluir hojas de cálculo, videoclips, clips de sonido y otras aplicaciones directamente en sus documentos._

_Con HTML, los autores describen la estructura de las páginas mediante etiquetas de marcado. Los elementos del idioma etiquetan piezas de contenido como "títulos", "párrafos", "listas", "tablas", "imágenes", entre otros elementos._

Además del W3C[1](#fn1), existen otros sitios web que ofrecen información de tecnologías web como MDN Web Docs[2](#fn2) de Mozilla; lo define de la siguiente manera:

> _HTML no es un lenguaje de programación; Es un lenguaje de marcado que define la estructura de un contenido. HTML consiste en una serie de elementos, usados para encapsular diferentes partes del contenido y hacer que se comporten de forma determinada. Las etiquetas que rodean el contenido pueden redireccionar palabras o imagenes a otra página web, poner en cursiva los textos, hacer que la fuente sea más grande o más pequeña, entre otras opciones._

## Anatomía de un elemento HTML

El lenguaje consiste en una serie de etiquetas predeterminadas destinadas a darle jerarquía al contenido de los documentos. Antes de mostrar ejemplos de algunas de sus etiquetas básicas, es importante entender su anatomía :

- Exceptuando algunos casos, gran parte de las etiquetas están conformadas por una etiqueta de apertura <etiqueta>.

- Para completar la declaración del contenido, es necesaria una etiqueta de cierre </etiqueta>.

Por lo tanto, la forma general para declarar un contenido en HTML, sigue la siguiente regla: <h1>Este es un título</h1>. La siguiente imagen ilustra estos conceptos:

![Estructura de una etiqueta html](https://res.cloudinary.com/flaex/image/upload/v1676245108/strapi-v4/anatomia_1_bee5bca92f.webp)
_Estructura de una etiqueta html_

Los elementos HTML pueden tener atributos, la imagen demuestra esta característica:

![Atributo de una etiqueta html](https://res.cloudinary.com/flaex/image/upload/v1676245108/strapi-v4/anatomia_2_8942981442.webp)
_Atributo de una etiqueta html_

Los atributos contienen información adicional sobre los elementos. En la imagen de arriba, _class_ es el nombre del atributo y la _nota_, su valor. El atributo _class_ permite dar al elemento un identificador que se puede usar para incluir información de estilos _CSS_.

_Las imágenes y su descripción en "Anatomía de un elemento HTML", fueron extraídas de MDN Web Docs [3](#fn3) ._

A su vez, es posible declarar etiquetas dentro de otras etiquetas siguiendo la misma regla, como se puede ver en la estructura de ejemplo, en donde las etiquetas h1 y p, están anidadas dentro de body:

<body>

<h1>Mi Primer título</h1>

<p>Mi primer párrafo</p>

</body>

Desde el punto de vista del diseño gráfico, dichas etiquetas pueden en algunos casos delimitar "contenedores" o componentes; es importante tener en cuenta que mediante HTML no es posible darle atributos gráficos a nuestras páginas. Para este fin, se utiliza CSS.

Las etiquetas nos permiten organizar nuestros documentos de manera estructurada, es decir, podríamos pensar en HTML como el "esqueleto" de nuestra información. El siguiente código ilustra un ejemplo de la estructura de las etiquetas base que nos permitirán describir el contenido de las páginas:

<!DOCTYPE html>
<html>
   <head>
      <title>Título de la página</title>
   </head>
   <body>
      <h1>Mi Primer título</h1>
      <p>Mi primer párrafo</p>
      </body>
</html>

Todo documento HTML necesita una estructura base que aporte información a los navegadores web sobre como procesar dicho documento. A continuación describiremos el propósito de las etiquetas que conforman la estructura dada en el primer ejemplo:

<!DOCTYPE html>: Indica la versión en la que se presenta el documento, en este caso, es la 5ta versión de HTML. Anteriormente, en esta etiqueta se podían definir diferentes variaciones de HTML; desde que la W3C definió a HTML5 cómo el estándar a seguir, esta forma de declaración es la más usada. Como se puede observar, esta etiqueta no requiere cierre.

<html>: Esta etiqueta es la que contiene todos los elementos de nuestro documento, uno de sus atributos más comunes sirve para declarar el idioma del contenido del HTML.

<head>: Esta etiqueta está destinada a contener otras con meta información del documento, por ejemplo:

- <title>: título de la página.

- <meta>: descripciones cortas que informan a los buscadores el tópico del documento.

- <style>: declaraciones de estilos CSS para dar atributos gráficos.


- <script>: rutinas de código en otros lenguajes del lado del cliente (navegador del usuario).


- <link>: conexión a otros recursos relacionados con el documento.

<head>
   <title>Título de la página</title>
   <meta name="description" content="Descripción de HTML">
   <style>
      //Ejemplo CSS para definir color de los elementos h1
      h1 {color: blue}
   <style>
   <script>
      //Ejemplo JavaScript para multplicar 2 valores dados
      function myFunction(p1, p2) {
         return p1 * p2
      }
   </script>
</head>

_La información de <head> fue tomada de htmlquick.com [4](#fn4) _

Las etiquetas descritas hasta el momento sirven para dar información general de la página e incluir otros recursos relacionados con el documento HTML. Gran parte de los elementos relacionados con los elementos visibles por los navegadores están contenidos en la etiqueta <body>.

<body>: Es la sección de nuestro documento que contiene todo los elementos visibles. Todo el contenido que se declare dentro de esta etiqueta será "renderizado" por el navegador y, por consiguiente, visualizado por los visitantes de nuestra página web.

### Referencias

[1](): [W3C](https://www.w3.org/Consortium/)

[2](): [MDN Web Docs](https://developer.mozilla.org/es/docs/MDN/About)

[3](): [MDN Web Docs - HTML basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)

[4](): [htmlquick.com - The document's head](https://www.htmlquick.com/tutorials/document-structure.html#the-documents-head)
