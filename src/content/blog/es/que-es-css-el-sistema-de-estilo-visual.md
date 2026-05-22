---

title: "¿QUÉ ES CSS? EL SISTEMA DE ESTILO VISUAL"
lens: "builder_lens"
language: "es"
pillar: "Technical Alchemy (The Builder Lens)"
originalLanguage: "Spanish"
---

## Definición y Función
CSS (Cascading Style Sheets) es el lenguaje estándar que permite dar atributos visuales a los elementos HTML. El **W3C** lo define como un mecanismo simple para agregar estilo (fuentes, colores, espaciado) a los documentos. **MDN Web Docs** añade que es el lenguaje que describe cómo se deben representar los elementos en pantalla, papel o asistentes de voz.

## 1. Anatomía de una Declaración CSS
Una regla CSS consiste en un **selector** y una serie de **declaraciones** (propiedad y valor):
*Ejemplo:* `h1 { color: red; font-size: 18px; }`
*   **Selector (`h1`):** Indica a qué etiqueta se aplica.
*   **Declaraciones:** Van entre llaves `{}` y se separan por punto y coma `;`.

### Tipos de Selectores Críticos
1.  **De Elemento:** Selecciona todas las etiquetas de un tipo (ej. `p`).
2.  **De Clase (`.mi-clase`):** Para elementos marcados con ese identificador.
3.  **De ID (`#mi-id`):** Para elementos únicos. Es buena práctica usarlo con moderación para casos específicos.

## 2. Relación de Dependencia: CSS y HTML
El CSS depende directamente del HTML. Para que el estilo tenga efecto, debe existir un elemento previo. Existen tres formas de vincularlos:
1.  **Etiqueta `<style>`:** Dentro del `<head>`.
2.  **Archivo Externo (`.css`):** Vinculado con `<link>`. Es la forma más escalable y profesional.
3.  **Estilos Inline:** Usando el atributo `style` directamente en la etiqueta HTML.

Dominar el CSS es dominar la **presentación de la autoridad**. Un sistema de estilos bien estructurado garantiza que la marca sea consistente, rápida y visualmente impecable en cualquier medio.
