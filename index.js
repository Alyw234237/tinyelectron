const {ipcRenderer} = require('electron')
const tinymce = require('tinymce/tinymce');
require('tinymce/themes/silver');
require('tinymce/plugins/paste');
require('tinymce/plugins/link');

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

tinymce.IconManager.add('markdown-labs-demo', {
  icons: {
    markdown: `<?xml version="1.0" encoding="UTF-8"?>
    <svg width="24px" height="24px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="markdown-mark" transform="translate(2.000000, 12.000000)" fill="#222f3e" fill-rule="nonzero">
                <path d="M0.5,16 L0.5,0 L5.40322581,0 L10.3064516,5.88235294 L15.2096774,0 L20.1129032,0 L20.1129032,16 L15.2096774,16 L15.2096774,6.82352941 L10.3064516,12.7058824 L5.40322581,6.82352941 L5.40322581,16 L0.5,16 Z M31.1451613,16 L23.7903226,8.23529412 L28.6935484,8.23529412 L28.6935484,0 L33.5967742,0 L33.5967742,8.23529412 L38.5,8.23529412 L31.1451613,16 Z" id="Shape"></path>
            </g>
        </g>
    </svg>`
  }
});

tinymce.init({
  selector: 'div.tinymce-full',
  height: "100%",
  theme: 'silver',
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px; }',
  toolbar: 'undo redo | formatselect bold italic underline strikethrough superscript subscript numlist bullist link blockquote codeformat | table image hr | markdown',
  // ^ Add these for custom buttons!: 'customInsertButton customDateButton'
  block_formats: 'Normal text=p; H1=h1; H2=h2; H3=h3; H4=h4; H5=h5; H6=h6',
  plugins: 'code link image table markdown lists save searchreplace autolink charmap hr toc textpattern charmap emoticons menusave',
  contextmenu_never_use_native: true,
  contextmenu: 'cut copy paste selectall',
  icons: 'markdown-labs-demo',
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
  paste_auto_cleanup_on_paste : true,
  paste_remove_styles: true,
  paste_remove_styles_if_webkit: true,
  paste_strip_class_attributes: true,

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
    {start: '---', replacement: '<hr/>'},
    {start: '--', replacement: '—'},
  ],
  toolbar_sticky: true,
  resize: false,
  //width: 800,
  statusbar: false,
  //skin: 'snow',
  //icons: 'thin',

  /*  extended_valid_elements : 'link[rel|href],' +
  'a[class|name|href|target|title|onclick|rel],'+
  'script[type|src],'+
  'iframe[src|style|width|height|scrolling|marginwidth|marginheight|frameborder],'+
  'img[class|src|border=0|alt|title|hspace|vspace|width|height|align|onmouseover|onmouseout|name]',*/

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

  },

});

