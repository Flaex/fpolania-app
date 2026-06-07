---
title: "WHAT IS CSS? THE VISUAL STYLE SYSTEM"
lens: "builder_lens"
image: "https://res.cloudinary.com/flaex/image/upload/v1682536096/strapi-v4/flaex_que_es_css_d462946d27.webp"
language: "en"
pillar: "Technical Alchemy (The Builder Lens)"
originalLanguage: "Spanish"
date: "2023-04-26"
---
## Definition and Function

CSS (Cascading Style Sheets) is the standard language that allows visual attributes to be given to HTML elements. The **W3C** defines it as a simple mechanism for adding style (fonts, colors, spacing) to documents. **MDN Web Docs** adds that it is the language that describes how elements should be represented on screen, paper, or voice assistants.

## 1. Anatomy of a CSS Declaration

The rules for writing CSS consist of a selector (an HTML element name, id, or class) and a series of declarations that define the visual styling of the selected element. In the following example, we see the `color` property assigned the value `red`:

![Anatomy of a CSS declaration](https://res.cloudinary.com/flaex/image/upload/v1682362580/strapi-v4/flaex_que_es_css_anatomia_declaracion_9e8747b8d3.webp)
_Anatomy of a CSS declaration_

As shown in the image above, the selector (as the first element) indicates that the styles declared will apply to all `<h1>` tags in our HTML document. The second element consists of the declarations contained within curly braces `{}`. Declarations consist of property-value pairs that assign visual characteristics to the designated selector. It is possible to declare multiple properties within a single block, separating them with a semicolon:

![Anatomy of a CSS declaration with two properties](https://res.cloudinary.com/flaex/image/upload/v1682455207/strapi-v4/flaex_que_es_css_2_declaraciones_7222a2cfb5.webp)
_Anatomy of a CSS declaration with two properties_

In addition to assigning the color red, we can also designate the typography font size as `18px`.

### Critical Selector Types

Selectors are patterns used to select the elements we want to style. The selector in the previous examples targets **all** `<h1>` tags in the HTML document. It is also possible to target multiple HTML elements by separating selectors with commas:

![Anatomy of a CSS declaration with two selectors](https://res.cloudinary.com/flaex/image/upload/v1682456062/strapi-v4/flaex_que_es_css_2_selectores_2_declaraciones_7adf7bb411.webp)
_Anatomy of a CSS declaration with two selectors_

In the declaration above, the CSS styles will apply to all `<h1>` and `<p>` elements.

**Class Selectors** are another way to target elements. Their main advantage is that the styles apply only to the HTML elements marked with that specific class. We write class selectors by prefixing a dot `.` to the class name:

![Class CSS selector](https://res.cloudinary.com/flaex/image/upload/v1682456856/strapi-v4/flaex_que_es_css_clase_4a25f4aed6.webp)
_Class CSS selector_

The declared styles will affect all elements identified with this class:

![HTML element identified with class 'titulo'](https://res.cloudinary.com/flaex/image/upload/v1682533496/strapi-v4/flaex_que_es_css_html_clase_d9442403d5.webp)
_HTML element identified with class 'titulo'_

**ID Selectors** are another way to target elements in CSS. Similar to class selectors, the styles apply only to the HTML element designated with that specific ID. It is considered best practice to use an ID selector for a single, unique element, unlike classes which can identify multiple HTML elements. ID selectors are written by prefixing a hash `#` symbol to the ID name:

![ID CSS selector](https://res.cloudinary.com/flaex/image/upload/v1682534416/strapi-v4/flaex_que_es_css_id_f205773068.webp)
_ID CSS selector_

The declared styles will affect the unique element identified with this ID:

![HTML element identified with ID 'encabezado'](https://res.cloudinary.com/flaex/image/upload/v1682534534/strapi-v4/flaex_que_es_css_html_id_7b7c50506c.webp)
_HTML element identified with ID 'encabezado'_

Element, class, and ID selectors are the basic building blocks for styling HTML documents. There are more advanced ways to combine selectors to be highly specific. A detailed reference can be found on [W3Schools](https://www.w3schools.com/cssref/css_selectors.php).

## 2. Dependency Relationship: CSS and HTML

The primary goal of CSS is to provide visual style to HTML documents (colors, sizes, positioning, etc.). This means that for any CSS rule to take effect, a corresponding HTML element must exist. The dependency relationship between both languages is direct.

_You may also like to read: [What is HTML? The Structure of Information](/blog/en/what-is-html-the-structure-of-information)._

There are three ways to link a CSS stylesheet to an HTML document:

1.  **Inside a `<style>` tag** in the `<head>` of the HTML file:

    ![HTML code with CSS styles inside <head> tag](https://res.cloudinary.com/flaex/image/upload/v1682358632/strapi-v4/flaex_que_es_css_style_head_efc956a136.webp)
    _HTML code with CSS styles inside <head> tag_

2.  **In an independent stylesheet** within the project with a `.css` extension, linked with the `<link>` tag. This is the most scalable and professional way:

    ![Link to an external CSS stylesheet](https://res.cloudinary.com/flaex/image/upload/v1682358819/strapi-v4/flaex_que_es_css_style_link_a31ab71fe7.webp)
    _Link to an external CSS stylesheet_

3.  **Inline styles** directly inside the `style` attribute of the HTML element:

    ![Inline CSS styles inside the style attribute of HTML element](https://res.cloudinary.com/flaex/image/upload/v1682358782/strapi-v4/flaex_que_es_css_style_inline_eb594f9f3c.webp)
    _Inline CSS styles inside the style attribute of HTML element_

The choice of how to link CSS styles with HTML depends on the project's architecture and the content delivery strategy.

Mastering CSS is mastering the **presentation of authority**. A well-structured style system ensures that the brand is consistent, fast, and visually flawless on any medium.

## References

- [W3C Consortium](https://www.w3.org/Consortium/)
- [MDN Web Docs](https://developer.mozilla.org)
