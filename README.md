# Angular Markdown Embed

[![Build Status](https://travis-ci.org/brunobertolini/angular-markdown-embed.png)](https://travis-ci.org/brunobertolini/angular-markdown-embed) [![Dependency Status](https://gemnasium.com/brunobertolini/angular-markdown-embed.svg)](https://gemnasium.com/brunobertolini/angular-markdown-embed)

Directive to embed markdown in your html

## Usage

1. `bower install angular-markdown-embed`
2. Import script `build/js/markdown.bundle.js`
3. Import highlight theme default `highlightjs/styles/default.css`
4. Add `bno.markdown` as a module dependency to your app.
5. Insert the `bno-markdown` directive into your template:

```html
<bno-markdown load="README.md"></bno-markdown>
```
