# tinyelectron

A custom rich-text editor forked from [Moliman/tiny-electron](https://github.com/Moliman/tiny-electron) (originally by [bmaranville/el-tiny-editor](https://github.com/bmaranville/el-tiny-editor)). Uses [Electron](https://www.electronjs.org/) and [TinyMCE 5](https://github.com/tinymce/tinymce). Runs on all major desktop operating systems: Windows, macOS, Linux, and Chrome OS (via Crostini).

Features:

* Restricted rich-text support. Only headings, bold, italics, underline, strikethrough, superscript, subscript, bulleted lists, numbered lists, links, block quotes, code, tables, images, and horizontal lines are included. All other styling—including e.g. font size and color—is disabled and automatically removed.
* Editing and formatting keyboard shortcuts (e.g., ctrl+v for paste, ctrl+b for bold, ctrl+k for links, etc.).
* Partial support for while-typing conversion of markdown into rich-text (e.g., typing "# header title" and new line will make an H1 header).
* Panes to view and edit the document as HTML code or markdown.
* Find and replace.

Here is a screenshot of the editor:

[![](screenshot.png)](screenshot.png?raw=true)

To install dependencies and run:

`npm install`

`npm start`

To build executables:

`yarn dist`

To install as an application, run the appropriate executable (e.g., .exe, .deb) in the dist folder after building.

