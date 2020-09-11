# tinyelectron

A simple constrained-rich-text and markdown editor using [Electron](https://www.electronjs.org/), [TinyMCE 5](https://github.com/tinymce/tinymce), and [Showdown](https://github.com/showdownjs/showdown) (via a modified [TinyMCE labs plugin](https://www.tiny.cloud/labs/markdown/)). Runs on Windows, macOS, Linux, and Chrome OS (via Crostini).

Forked and expanded on from [Moliman/tiny-electron](https://github.com/Moliman/tiny-electron) (originally by [bmaranville/el-tiny-editor](https://github.com/bmaranville/el-tiny-editor)).

## Screenshot

[![](screenshot.png)](screenshot.png?raw=true)


## Features

* Open and save files as markdown (MD), plain text (TXT), or restricted rich-text (HTML).
* Views to edit the document as rich-text, markdown, or HTML code. Bidirectional live editing between rich-text and markdown views.
* Rich-text is constrained. Only headings, bold, italics, underline, strikethrough, superscript, subscript, bulleted lists, numbered lists, links, block quotes, code, tables, images, and horizontal lines are included. All other styling—e.g. font size, font color, spacing, alignment, etc.—is automatically filtered.
* Rich-text is displayed with a fixed appearance. Modifiable via stylesheet (or in preferences in the future).
* Partial support for live conversion of markdown into rich-text in rich-text editing mode. For example, typing `# Header title` will make an H1 header and typing `**This text is bold.**` will give bolded text. This feature does not currently work for links, tables, or images (use the formatting buttons, keyboard shorcuts, or markdown editing pane instead for these). Also includes live conversions for en (--) and em dashes (---).
* Editing and formatting keyboard shortcuts in rich-text mode (e.g., ctrl+o = open, ctrl+v = paste, ctrl+b = bold, etc.).
* Find and replace functionality in the rich-text view.

## Bugs

All the bugs! Editor is experimental and not for production use at this time. Markdown support is especially buggy.

## Installation

To install dependencies and run:

`npm install`

`npm start`

To build executables:

`yarn dist`

To install as an application, run the appropriate executable (e.g., .exe, .deb) in the dist folder after building.

## Related

Similar live/rich-text markdown editors:

* [Typora](https://typora.io/)
* [Mark Text](https://github.com/marktext/marktext)
* [Zettlr](https://github.com/Zettlr/Zettlr)
* [Uncolored](https://github.com/n457/Uncolored)
* [Abricotine](http://abricotine.brrd.fr/)
* [ghostwriter](https://wereturtle.github.io/ghostwriter/)
* [VNote](https://github.com/tamlok/vnote)
* [UNOTES](https://marketplace.visualstudio.com/items?itemName=ryanmcalister.Unotes) for [VSCode](https://github.com/microsoft/vscode)

