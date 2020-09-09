const {ipcRenderer} = require('electron')
const tinymce = require('tinymce/tinymce');

tinymce.PluginManager.add('menusave', function(editor, url) {
    editor.ui.registry.addMenuItem('menuload', {
        text: 'Open',
        onAction: () => ipcRenderer.send('call-load')
    });
    editor.ui.registry.addMenuItem('menusave', {
        text: 'Save',
        onAction: () => ipcRenderer.send('call-save', tinymce.editors[0].getContent({format: 'raw'}))
    });
    editor.ui.registry.addMenuItem('menusaveas', {
        text: 'Save As',
        onAction: () => ipcRenderer.send('call-saveAs',tinymce.editors[0].getContent({format: 'raw'}))
    });
    editor.ui.registry.addMenuItem('menuquit', {
        text: 'Quit',
        onAction: () => ipcRenderer.send('call-quit')
    });
});

ipcRenderer.on('new-file', function (event, data) {
  tinymce.editors[0].setContent(data);
});

ipcRenderer.on("change-cwd", (event, newPath) =>{
  if (tinymce.activeEditor) {
    var doc = tinymce.activeEditor.getDoc(),
        head = doc.head,
        base;
    if (head.getElementsByTagName("base").length == 0) {
      base = document.createElement("base");
      head.appendChild(base);
    } else {
      base = head.getElementsByTagName("base")[0]
    }
    base.setAttribute("href", "file://" + newPath + "/");
    tinymce.activeEditor.documentBaseURI.setPath(newPath + "/");
  }
});

tinymce.baseURL = "node_modules/tinymce";

tinymce.IconManager.add('custom', {
  icons: {
    // From here: https://apps.tiny.cloud/products/skins-and-icon-packs/ (MORE TO GET) ->
    newdoc: `<svg width="24" height="24"><path fill-rule="nonzero" d="M7 4a1 1 0 00-1 1v14c0 .6.4 1 1 1h10c.6 0 1-.4 1-1V9l-5-5H7zm6 5V5l4 4h-4z"></path></svg>`,
    undo: `<?xml version="1.0" encoding="UTF-8"?><svg width="24" height="24"><path fill-rule="nonzero" d="M12.5 8c-2.7 0-5 1-6.9 2.6L2 7v9h9l-3.6-3.6A8 8 0 0120 16l2.4-.8a10.5 10.5 0 00-10-7.2z"></path></svg>`,
    redo: `<?xml version="1.0" encoding="UTF-8"?><svg width="24" height="24"><path fill-rule="nonzero" d="M18.4 10.6a10.5 10.5 0 00-16.9 4.6L4 16a8 8 0 0112.7-3.6L13 16h9V7l-3.6 3.6z"></path></svg>`,
    bold: `<?xml version="1.0" encoding="UTF-8"?><svg width="24" height="24"><path fill-rule="nonzero" d="M14.6 11.8c.9-.6 1.4-1.4 1.4-2.3 0-2-1.6-3.5-3.5-3.5H7v12h6.3c1.7 0 3.2-1.5 3.2-3.3 0-1.3-.8-2.4-1.9-2.9zM9.5 8h2.8a1.5 1.5 0 110 3H9.4V8zm3.3 8H9.4v-3h3.3a1.5 1.5 0 110 3z"></path></svg>`,
    italic: `<?xml version="1.0" encoding="UTF-8"?><svg width="24" height="24"><path fill-rule="nonzero" d="M10 6v2h2.6l-3.7 8H6v2h8v-2h-2.6l3.7-8H18V6z"></path></svg>`,
    underline: `<?xml version="1.0" encoding="UTF-8"?><svg width="24" height="24"><path fill-rule="nonzero" d="M12 16a5 5 0 005-5V4h-2.5v7a2.5 2.5 0 01-5 0V4H7v7a5 5 0 005 5zm-6 2v2h12v-2H6z"></path></svg>`,
    link: `<?xml version="1.0" encoding="UTF-8"?><svg width="24" height="24"><path fill-rule="nonzero" d="M4.9 12c0-1.2 1-2.1 2.1-2.1h4V8H7a4 4 0 100 8h4v-1.9H7c-1.2 0-2.1-1-2.1-2.1zM17 8h-4v1.9h4a2.1 2.1 0 110 4.2h-4V16h4a4 4 0 100-8zm-8 5h6v-2H9v2z"></path></svg>`,
    image: `<?xml version="1.0" encoding="UTF-8"?><svg width="24" height="24"><path fill-rule="nonzero" d="M19 4H5a1 1 0 00-1 1v14c0 .6.5 1 1 1h14c.6 0 1-.4 1-1V5c0-.5-.4-1-1-1zM6.5 16l2.8-3.5 2 2.3 2.7-3.5 3.5 4.7h-11z"></path></svg>`,
    code: `<?xml version="1.0" encoding="UTF-8"?><svg width="24" height="24"><path fill-rule="nonzero" d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path></svg>`,
    bullist: `<?xml version="1.0" encoding="UTF-8"?><path fill-rule="nonzero" d="M10 13h9v-2h-9v2zm0-7v2h9V6h-9zm0 12h9v-2h-9v2zm-4-5h2v-2H6v2zm0-7v2h2V6H6zm0 12h2v-2H6v2z"></path>`,
    numlist: `<?xml version="1.0" encoding="UTF-8"?><svg width="24" height="24"><path fill-rule="nonzero" d="M5 16h2v.5H6v1h1v.5H5v1h3v-4H5v1zm0-5h1.8L5 13.1v.9h3v-1H6.2L8 10.9V10H5v1zm1-2h1V5H5v1h1v3zm4-3v2h9V6h-9zm0 12h9v-2h-9v2zm0-5h9v-2h-9v2z"></path></svg>`,
    table: `<svg width="24" height="24"><path fill-rule="nonzero" d="M5 5v14h14V5H5zm6 12H7v-4h4v4zm0-6H7V7h4v4zm6 6h-4v-4h4v4zm0-6h-4V7h4v4z"></path></svg>`,
    // Ugly
    //strikethrough: `<svg width="24" height="24"><path fill-rule="nonzero" d="M11 18h2v-4h-2v4zM7 5v2h4v3h2V7h4V5H7zm-1 8h12v-2H6v2z"></path></svg>`,
    hr: `<svg width="24" height="24"><path d="M4 11h16v2H4z" fill-rule="evenodd"></path></svg>`,
    blockquote: `<svg width="24" height="24"><path fill-rule="nonzero" d="M13 8v5h2.8L14 16h2.3l1.7-3V8h-5zm-7 5h2.8L7 16h2.3l1.7-3V8H6v5z"></path></svg>`,
    superscript: `<svg width="24" height="24"><path fill-rule="nonzero" d="M15 9.4L10.4 14l4.6 4.6-1.4 1.4L9 15.4 4.4 20 3 18.6 7.6 14 3 9.4 4.4 8 9 12.6 13.6 8 15 9.4zm5.9 1.6h-5v-1l1-.8 1.7-1.6c.3-.5.5-.9.5-1.3 0-.3 0-.5-.2-.7-.2-.2-.5-.3-.9-.3l-.8.2-.7.4-.4-1.2c.2-.2.5-.4 1-.5.3-.2.8-.2 1.2-.2.8 0 1.4.2 1.8.6.4.4.6 1 .6 1.6 0 .5-.2 1-.5 1.5l-1.3 1.4-.6.5h2.6V11z"></path></svg>`,
    subscript: `<svg width="24" height="24"><path fill-rule="nonzero" d="M10.4 10l4.6 4.6-1.4 1.4L9 11.4 4.4 16 3 14.6 7.6 10 3 5.4 4.4 4 9 8.6 13.6 4 15 5.4 10.4 10zM21 19h-5v-1l1-.8 1.7-1.6c.3-.4.5-.8.5-1.2 0-.3 0-.6-.2-.7-.2-.2-.5-.3-.9-.3a2 2 0 00-.8.2l-.7.3-.4-1.1 1-.6 1.2-.2c.8 0 1.4.3 1.8.7.4.4.6.9.6 1.5s-.2 1.1-.5 1.6a8 8 0 01-1.3 1.3l-.6.6h2.6V19z"></path></svg>`,
    markdown: `<?xml version="1.0" encoding="UTF-8"?><svg width="24px" height="24px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="markdown-mark" transform="translate(2.000000, 12.000000)" fill="#5f6368" fill-rule="nonzero"><path d="M0.5,16 L0.5,0 L5.40322581,0 L10.3064516,5.88235294 L15.2096774,0 L20.1129032,0 L20.1129032,16 L15.2096774,16 L15.2096774,6.82352941 L10.3064516,12.7058824 L5.40322581,6.82352941 L5.40322581,16 L0.5,16 Z M31.1451613,16 L23.7903226,8.23529412 L28.6935484,8.23529412 L28.6935484,0 L33.5967742,0 L33.5967742,8.23529412 L38.5,8.23529412 L31.1451613,16 Z" id="Shape"></path></g></g></svg>`,
  }
});

tinymce.IconManager.add('markdown-labs-demo', {
  icons: {

  }
});

tinymce.init({
  selector: 'div.tinymce-full',
  height: "100%",
  theme: 'silver',
  //content_css: 'document',
  content_css: 'tinymce-custom.css',
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px; }',
  toolbar: 'undo redo formatselect bold italic underline strikethrough superscript subscript bullist numlist link blockquote codeformat table image hr markdown',
  // ^ Add these for custom buttons!: 'customInsertButton customDateButton'
  block_formats: 'Normal text=p; H1=h1; H2=h2; H3=h3; H4=h4; H5=h5; H6=h6',
  plugins: 'code link image table markdown lists paste save searchreplace autolink charmap hr toc textpattern charmap emoticons menusave',
  contextmenu_never_use_native: true,
  contextmenu: 'cut copy paste selectall',
  icons: 'custom',
  elementpath: false,
  branding: false,
  menubar: 'file edit insert format table tools', // 'false' to disable
  /* Note: codeformat and blockquote icons vs. menu items kind of messed up */
  menu: {
    file: { title: 'File', items: 'newdocument restoredraft menuload menusave menusaveas | menuquit' },
    edit: { title: 'Edit', items: 'undo redo | cut copy paste | selectall | searchreplace' },
    insert: { title: 'Insert', items: 'image link inserttable | charmap emoticons hr | toc ' },
    format: { title: 'Format', items: 'bold italic underline strikethrough superscript subscript | codeformat blockquote | formats | removeformat' },
    table: { title: 'Table', items: 'inserttable | row column cell | deletetable' },
    tools: { title: 'Tools', items: 'spellchecker spellcheckerlanguage | code wordcount' },
  },
  paste_auto_cleanup_on_paste: true,
  paste_remove_styles: true,
  paste_remove_styles_if_webkit: true,
  paste_strip_class_attributes: true,
  paste_as_text: false,
  paste_word_valid_elements: "p,br,b,strong,i,em,u,strike,s,del,h1,h2,h3,h4,h5,h6,ul,ol,li,dl,dt,dd,a,img,blockquote,code,pre,samp,table,tr,td,th,thread,tbody,hr",

  style_formats: [
    { title: 'Paragraph', format: 'p' },
    { title: 'Heading 1', format: 'h1' },
    { title: 'Heading 2', format: 'h2' },
    { title: 'Heading 3', format: 'h3' },
    { title: 'Heading 4', format: 'h4' },
    { title: 'Heading 5', format: 'h5' },
    { title: 'Heading 6', format: 'h6' },
    { title: 'Blockquote', format: 'blockquote' },
  ],
  link_context_toolbar: true,
  link_title: false,
  link_quicklink: true,
  table_appearance_options: false,
  image_dimensions: false,
  textpattern_patterns: [
    {start: '*', end: '*', format: 'italic'},
    {start: '**', end: '**', format: 'bold'},
    {start: '***', end: '**', format: 'bold+italic'},
    {start: '#', format: 'h1'},
    {start: '##', format: 'h2'},
    {start: '###', format: 'h3'},
    {start: '####', format: 'h4'},
    {start: '#####', format: 'h5'},
    {start: '######', format: 'h6'},
    {start: '1. ', cmd: 'InsertOrderedList'},
    {start: '* ', cmd: 'InsertUnorderedList'},
    {start: '- ', cmd: 'InsertUnorderedList' },
    {start: '> ', cmd: 'mceBlockQuote'},
    {start: '`', end: '`', format: 'code'},
    {start: '~~', end: '~~', format: 'strikethrough'},
    {start: '---', replacement: '—'},
    {start: '--', replacement: '–'},
    {start: '===', replacement: '<hr />'},
  ],
  toolbar_sticky: true,
  resize: false,
  //width: 800,
  statusbar: false,
  //skin: 'snow',
  //icons: 'thin',

    extended_valid_elements : 'link[rel|href],' +
  'a[class|name|href|target|title|onclick|rel],'+
  'script[type|src],'+
  'iframe[src|style|width|height|scrolling|marginwidth|marginheight|frameborder],'+
  'img[class|src|border=0|alt|title|hspace|vspace|width|height|align|onmouseover|onmouseout|name]',

  // Save button callback function (JUST TO PREVENT THAT ERROR UPON CTRL+S)
  save_onsavecallback: function () { console.log('Saved'); },

  // https://www.tiny.cloud/docs/demo/custom-toolbar-button/
  setup: function (editor) {

    // Add custom insert button
    editor.ui.registry.addButton('customInsertButton', {
      //text: 'My Button',
      //image: 'http://p.yusukekamiyamane.com/icons/search/fugue/icons/calendar-blue.png',
      tooltip: 'Insert Custom String',
      icon: 'insert-string',
      onAction: function (_) {
        editor.insertContent('&nbsp;<strong>It\'s my button!</strong>&nbsp;');
      }
    });

    // Function for custom date button
    var toTimeHtml = function (date) {
      return '<time datetime="' + date.toString() + '">' + date.toDateString() + '</time>';
    };

    // Add custom date button
    editor.ui.registry.addButton('customDateButton', {
      //text: 'My Button',
      icon: 'insert-time',
      //image: 'http://p.yusukekamiyamane.com/icons/search/fugue/icons/calendar-blue.png',
      tooltip: 'Insert Current Date',
      onAction: function (_) {
      var html = toTimeHtml(new Date());
      editor.insertContent(html);                },
      onSetup: function (buttonApi) {
        var editorEventCallback = function (eventApi) {
          buttonApi.setDisabled(eventApi.element.nodeName.toLowerCase() === 'time');
        };
        editor.on('NodeChange', editorEventCallback);

        /* onSetup should always return the unbind handlers */
        return function (buttonApi) {
          editor.off('NodeChange', editorEventCallback);
        };
      }
    });

    // ADD CUSTOM SHORCUTS -> https://www.tiny.cloud/docs/advanced/keyboard-shortcuts/
    // OVERRIDE SHORTCUTS -> https://stackoverflow.com/questions/19791696/overriding-shortcut-assignments-in-tinymce

    // Add custom keyboard shorcut
    editor.addShortcut('ctrl+n', 'New.', function () {
      editor.execCommand('mceNewDocument');
    });

    // Add custom keyboard shorcut
    editor.addShortcut('ctrl+o', 'Open.', function () {
      ipcRenderer.send('call-load');
    });

    // Add custom keyboard shorcut (ACTUALLY TINYMCE ALREADY HAS THIS ONE FOR SAVE)
    editor.addShortcut('ctrl+s', 'Save.', function () {
      ipcRenderer.send('call-save',tinymce.editors[0].getContent({format: 'raw'}));
    });

    // Add custom keyboard shorcut
    editor.addShortcut('shift+ctrl+s', 'Save as.', function () {
      ipcRenderer.send('call-saveAs',tinymce.editors[0].getContent({format: 'raw'}));
    });

    // Add custom keyboard shorcut
    editor.addShortcut('ctrl+w', 'Close.', function () {
      ipcRenderer.send('call-quit');
    });

    // Handle individual keyboard keys
    editor.on('keydown', function(event) {
      var key = event.keyCode || event.which;

      // Insert 8 non-breaking spaces with tab key and disable normal tab key handling
      if (key == 9) {
          editor.insertContent('&emsp;&emsp;');
          event.preventDefault();
          event.stopPropagation();
          return;
      }
    });
  },

  init_instance_callback : function(editor) {
    // Hack to give text box focus at start up
    document.getElementById("editor_ifr").focus();
  },

});

