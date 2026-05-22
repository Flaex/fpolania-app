---

title: "WHAT IS HTML? THE STRUCTURE OF INFORMATION"
lens: "builder_lens"
language: "en"
pillar: "Technical Alchemy (The Builder Lens)"
originalLanguage: "Spanish"
---

## Definition and Specification
HTML (HyperText Markup Language) is the main component of the web. According to the **World Wide Web Consortium (W3C)**, it is the language for describing the **structure** of web pages. It provides authors with the means to:
*   Publish documents with headings, text, tables, lists, and multimedia.
*   Connect information through hypertext links.
*   Design forms for remote transactions, searches, and reservations.
*   Include applications directly in the documents (spreadsheets, video, sound).

As **MDN Web Docs** well defines, HTML is not a programming language; it is a markup language that encapsulates parts of the content to make them behave in a certain way (italicize, enlarge fonts, redirect to other pages).

## 1. Anatomy of an HTML Element
The language uses markup tags to label pieces of content. Most tags have:
1.  **Opening tag:** `<tag>`
2.  **Content:** `This is a title`
3.  **Closing tag:** `</tag>`
*Example:** `<h1>This is a title</h1>`

### Attributes and Nesting
Elements can have **attributes** that contain additional information, such as `<p class="note">`, where `class` is the name and `note` the value. This attribute allows the element to be connected to the CSS style system. In addition, it is possible to declare tags within others (nesting), which allows for the construction of the hierarchical "skeleton" of the page.

## 2. Base Structure of a Document
A standard document follows this scheme:
```html
<!DOCTYPE html> <!-- Indicates HTML5 version -->
<html> <!-- Root container -->
   <head>
      <title>Page Title</title> <!-- Meta information -->
   </head>
   <body>
      <h1>My First Heading</h1> <!-- Visible content -->
      <p>My first paragraph</p>
   </body>
</html>
```
From my methodology, HTML is the **invisible architecture**. Without a clear structure, there is no SEO or accessibility, two critical pillars for the success of any digital product.
