---
title: "¿QUÉ ES CSS? EL SISTEMA DE ESTILO VISUAL"
lens: "builder_lens"
image: "https://res.cloudinary.com/flaex/image/upload/v1682536096/strapi-v4/flaex_que_es_css_d462946d27.webp"
language: "es"
pillar: "Technical Alchemy (The Builder Lens)"
originalLanguage: "Spanish"
---

## Definición y Función

CSS (Cascading Style Sheets) es el lenguaje estándar que permite dar atributos visuales a los elementos HTML. El **W3C** lo define como un mecanismo simple para agregar estilo (fuentes, colores, espaciado) a los documentos. **MDN Web Docs** añade que es el lenguaje que describe cómo se deben representar los elementos en pantalla, papel o asistentes de voz.

26 abril 2023CSS (Cascade Style Sheet) es el lenguaje estandar de la web que permite darle atributos visuales a los elementos HTML. De igual manera, su especificación está a cargo de The Web World Wide Web Consortium[1](#fn1), una comunidad internacional en donde sus miembros y el público en general trabajan en conjunto para desarrollar estándares web. La W3C[1](#fn1) lo define de la siguiente manera:

> _CSS es un mecanismo simple para agregar estilo (por ejemplo, fuentes, colores, espaciado) a documentos web._

MDN Web Docs[2](#fn2) de Mozilla, lo define de la siguiente así:

> _Es el lenguaje utilizado para describir la presentación de un documento escrito en HTML. CSS describe cómo se deben representar los elementos en la pantalla, en el papel, en los asistentes de voz o en otros medios._

### Anatomía de una declaración CSS

Las reglas para escribir CSS consisten en un selector (nombre elemento HTML, id o clase) y una serie de propiedades que definen el estilo visual del elemento seleccionado que denominaremos declaraciones; en el siguiente ejemplo se muestra la propiedad color y como valor rojo:

![Anatomia de una declaración CSS](https://res.cloudinary.com/flaex/image/upload/v1682362580/strapi-v4/flaex_que_es_css_anatomia_declaracion_9e8747b8d3.webp)

Tal y como se ve en la imagen de arriba, el selector como 1er elemento nos indica que los estilos a declarar a continuacion se aplicarán a todas las etiquetas h1 de nuestro documento HTML ; el 2do elemento, son las declaraciones contenidas dentro de llaves {}. Las declaraciones consisten en grupos de propiedad-valor que asignarán características visuales al selector designado; es posible tener dentro una misma declaración grupos de más de un par propiedades separándolas con un punto y coma:

![Anatomia de una declaración CSS con 2 propiedades](https://res.cloudinary.com/flaex/image/upload/v1682455207/strapi-v4/flaex_que_es_css_2_declaraciones_7222a2cfb5.webp)

Además de asignar rojo, también podemos designar el tamaño de las fuentes tipográficas en 18 pixels.

### Tipos de selectores

Los selectores son patrones utilizados para seleccionar los elementos a los que queremos dar estilo; el que hemos mostrado en los ejemplos designa a **todas** las etiquetas h1 contenidas en el documento HTML. Además, es posible seleccionar 2 elementos HTML separando los selectores con comas:

![Anatomia de una declaración CSS con 2 propiedades](https://res.cloudinary.com/flaex/image/upload/v1682456062/strapi-v4/flaex_que_es_css_2_selectores_2_declaraciones_7adf7bb411.webp)

En la declaración de la imagen de arriba los estilos CSS, se aplicarán a todos los elementos h1 y p.

**Las clases** son otra de las formas de crear selectores y su principal ventaja es que la declaración se aplicará unicamente al elemento HTML marcado con dicha clase. La forma de escribirlo es antecediendo un punto al nombre que le pondremos al selector:

![Selector CSS tipo clase](https://res.cloudinary.com/flaex/image/upload/v1682456856/strapi-v4/flaex_que_es_css_clase_4a25f4aed6.webp)

Los estilos declarados afectarán a todos los elementos identificados con esta clase:

![Elemento HTML identificado con la clase título](https://res.cloudinary.com/flaex/image/upload/v1682533496/strapi-v4/flaex_que_es_css_html_clase_d9442403d5.webp)

**Los id** es otra de las maneras en la que podemos crear selectores en CSS, al igual que los _selectores de clase_, los estilos se aplicarán únicamente al HTML designado con dicho id. Es importante mencionar que es considerado buena práctica, utilizar el _selector id_ para un elemento en particular; a diferencia de las clases que pueden usarse para identificar a más de un elemento HTML. Los id se escriben antecediendo el nombre con un signo numeral:

![Selector id CSS con 2 propiedades](https://res.cloudinary.com/flaex/image/upload/v1682534416/strapi-v4/flaex_que_es_css_id_f205773068.webp)

Los estilos declarados afectarán a todos los elementos identificados con este id:

![Elemento HTML identificado con la id encabezado](https://res.cloudinary.com/flaex/image/upload/v1682534534/strapi-v4/flaex_que_es_css_html_id_7b7c50506c.webp)

Los _selectores de elementos, clases e id_ son las maneras básicas de crear selectores para dar estilos a nuestros documentos HTML. Existen maneras de combinar selectores que nos permiten ser más específicos acerca del elemento que deseamos seleccionar; el sitio web [W3Schools](https://www.w3schools.com/cssref/css_selectors.php) los referencia detalladamente

### Relación entre CSS y HTML

El objetivo principal de CSS es el dar características y estilo gráfico a los documentos HTML (colores, tamaños, posición, entre otros). Esto quiere decir que para poder ver los resultados obtenidos en cualquier declaración CSS, es necesario haber aplicado previamente los estilos de dicha declaración a un elemento HTML; por esto, la relación de dependencia que existe entre ambos lenguajes es directa.

> _El artículo [¿Qué es HTML? Estructuta de un elemento](/blog/que-es-html-estructura-de-un-elemento/), te podría interesar_

Las formas en la que podemos vincular un archivo CSS (u hoja de estilos) con un documento HTML son:

- En una etiqueta <style>dentro del <head>del archivo HTML:

![Código HTML con estilos CSS dentro de etiqueta <head>](https://res.cloudinary.com/flaex/image/upload/v1682358632/strapi-v4/flaex_que_es_css_style_head_efc956a136.webp)

- En un archivo independiente dentro de nuestro proyecto con extensión .css, por ejemplo:

![Vínculo a hoja de estilo CSS externa](https://res.cloudinary.com/flaex/image/upload/v1682358819/strapi-v4/flaex_que_es_css_style_link_a31ab71fe7.webp)

- En estilos _inline_ dentro del atributo style del elemento HTML:

![Estilos CSS dentro de atributo style del elemento HMTL](https://res.cloudinary.com/flaex/image/upload/v1682358782/strapi-v4/flaex_que_es_css_style_inline_eb594f9f3c.webp)

La elección de la manera en la que se víncularán los estilos CSS con el HTML, quedará en las personas que participen en el proyecto y el tipo de contenido a publicar.

### Referencias

[1](): [W3C](https://www.w3.org/Consortium/)

[2](): [MDN Web Docs](https://developer.mozilla.org/es/docs/MDN/About)
