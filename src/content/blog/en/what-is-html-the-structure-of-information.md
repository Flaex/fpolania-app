---
title: "WHAT IS HTML? THE STRUCTURE OF INFORMATION"
lens: "builder_lens"
image: "https://res.cloudinary.com/flaex/image/upload/v1785342584/fpolania-app/blog/flaex_partes_de_un_html.webp"
language: "en"
pillar: "Technical Alchemy (The Builder Lens)"
originalLanguage: "Spanish"
date: "2023-02-12"
---

## Definition and Specification

HTML (HyperText Markup Language) is the main component of the web. According to the **World Wide Web Consortium (W3C)**, it is the language for describing the **structure** of web pages. It provides authors with the means to:

- Publish documents with headings, text, tables, lists, and multimedia.
- Connect information through hypertext links.
- Design forms for remote transactions, searches, and reservations.
- Include applications directly in the documents (spreadsheets, video, sound).

As **MDN Web Docs** well defines, HTML is not a programming language; it is a markup language that encapsulates parts of the content to make them behave in a certain way (italicize, enlarge fonts, redirect to other pages).

## 1. Anatomy of an HTML Element

The language uses markup tags to label pieces of content. Most tags have:

1.  **Opening tag:** `<tag>`
2.  **Content:** `This is a title`
3.  **Closing tag:** `</tag>`
    _Example:_ `<h1>This is a title</h1>`

The general rule to declare content in HTML is illustrated in the following image:

![Structure of an HTML tag](https://res.cloudinary.com/flaex/image/upload/v1676245108/strapi-v4/anatomia_1_bee5bca92f.webp)
_Structure of an HTML tag_

HTML elements can also have attributes, as shown in the following diagram:

![Attribute of an HTML tag](https://res.cloudinary.com/flaex/image/upload/v1676245108/strapi-v4/anatomia_2_8942981442.webp)
_Attribute of an HTML tag_

Attributes contain additional information about elements. In the image above, `class` is the attribute name and `note` is its value. The `class` attribute provides an identifier that can be used to apply CSS styles.

_The definitions and diagrams in this section are adapted from MDN Web Docs._

### Attributes and Nesting

It is also possible to declare tags inside other tags (nesting) following the same rule. For instance, in the following structure, the `<h1>` and `<p>` tags are nested inside the `<body>` element:

```html
<body>
  <h1>My First Heading</h1>
  <p>My first paragraph</p>
</body>
```

From a graphic design perspective, these tags often define layout containers or components. However, it is important to note that HTML alone cannot apply visual styling to our pages; that is the role of CSS.

## 2. Base Structure of a Document

Every HTML document requires a boilerplate structure to inform web browsers how to process it. The following code illustrates the base structure:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>My First Heading</h1>
    <p>My first paragraph</p>
  </body>
</html>
```

Here is the purpose of the tags that make up this base structure:

- `<!DOCTYPE html>`: Declares the document type and version (in this case, HTML5). Historically, different HTML variations were declared here; since the W3C defined HTML5 as the standard, this simple declaration has become the norm. This tag does not require a closing tag.
- `<html>`: The root element that wraps all the content of the document. One of its most common attributes is `lang`, used to declare the document's language.
- `<head>`: Contains metadata about the document that is not displayed directly in the viewport. Common elements inside the `<head>` include:
  - `<title>`: The page title displayed in the browser tab.
  - `<meta>`: Short descriptions that inform search engines and browsers about the page's metadata (charset, description, keywords, viewport).
  - `<style>`: Declares embedded CSS styles to apply visual attributes.
  - `<script>`: Client-side executable code (usually JavaScript).
  - `<link>`: Links the document to external resources, such as style sheets or icons.

```html
<head>
  <title>Page Title</title>
  <meta name="description" content="Description of HTML" />
  <style>
    /* CSS example to color h1 elements blue */
    h1 {
      color: blue;
    }
  </style>
  <script>
    // JavaScript example to multiply two values
    function myFunction(p1, p2) {
      return p1 * p2;
    }
  </script>
</head>
```

_The head elements description is adapted from htmlquick.com._

- `<body>`: Contains all the visible elements of the document. Anything declared within this tag will be rendered by the browser and displayed to visitors.

From my methodology, HTML is the **invisible architecture**. Without a clear structure, there is no SEO or accessibility, two critical pillars for the success of any digital product.

## References

- [W3C Consortium](https://www.w3.org/Consortium/)
- [MDN Web Docs](https://developer.mozilla.org)
- [MDN Web Docs - HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)
- [HTML Quick - The Document's Head](https://www.htmlquick.com/tutorials/document-structure.html#the-documents-head)
