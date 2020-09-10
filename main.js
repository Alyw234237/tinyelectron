const { app, BrowserWindow, Menu, dialog, ipcMain } = require('electron');

const url = require('url');
const path = require('path');
const fs = require('fs');
const beautify = require('js-beautify').html;
const isDev = process.mainModule.filename.indexOf('app.asar') === -1;

let mainWindow;

/*var template = [{
    label: "Application",
    submenu: [
        { label: "About Application", selector: "orderFrontStandardAboutPanel:" },
        { type: "separator" },
        { label: "Quit", accelerator: "Command+Q", click: function() { app.quit(); }}
    ]}, {
    label: "Edit",
    submenu: [
        { label: "Undo", accelerator: "CmdOrCtrl+Z", selector: "undo:" },
        { label: "Redo", accelerator: "Shift+CmdOrCtrl+Z", selector: "redo:" },
        { type: "separator" },
        { label: "Cut", accelerator: "CmdOrCtrl+X", selector: "cut:" },
        { label: "Copy", accelerator: "CmdOrCtrl+C", selector: "copy:" },
        { label: "Paste", accelerator: "CmdOrCtrl+V", selector: "paste:" },
        { label: "Select All", accelerator: "CmdOrCtrl+A", selector: "selectAll:" }
    ]}
];

Menu.setApplicationMenu(Menu.buildFromTemplate(template));*/

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 650,
    //frame: false,
    webPreferences: {
      nodeIntegration: true,
    },
    spellcheck: false
  });
  if (!isDev) {
    mainWindow.setMenuBarVisibility(false);
  }
  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true,
  }));
  if (isDev) {
    // Open the DevTools.
    //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
    //mainWindow.webContents.openDevTools();
  }
  mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on('call-load', (event, arg) => load());
ipcMain.on('call-save', (event, arg) => save(arg));
ipcMain.on('call-saveAs', (event, arg) => saveas(arg));
ipcMain.on('call-quit', (event, arg) => app.quit());


// TINY MCE-SCRIPT

let filename;
let working_directory;

function load() {
  dialog.showOpenDialog({ properties: ["openFile"], defaultPath: working_directory }, function (file) {
    // Prevent error message if click cancel
    if(!file[0]) {
      return;
    }
    fs.readFile(file[0], 'utf8', (err, data) => {
      if (err) throw err;
      change_working_directory(path.dirname(file[0]));
      filename = path.basename(file[0]);
      mainWindow.webContents.send('new-file', path.extname(filename), data);
    });
  });
}

function save(output) {
  if (filename == null) {
    saveas(output);
  } else {
    var fullpath = path.join(working_directory, filename);
    // Save as text
    if(path.extname(filename) == ".txt" || path.extname(filename) == ".text") {
      output = output.text;
    // Save as markdown
    } else if(path.extname(filename) == ".md" || path.extname(filename) == ".markdown") {
      output = output.markdown;
    // Save as HTML (HTML or other extension)
    } else {
      output = output.html;
    }
    fs.writeFile(fullpath, beautify(output, { indent_size: 2 }), (err) => {
      if (err) {
        throw err;
      }
    });
  }
}

function saveas(output) {
  var options = {
    //title: 'Select the file path to save',
    defaultPath: working_directory,
    //buttonLabel: 'Save',
    filters: [
      { name: 'All Files', extensions: ['*'] },
      { name: 'md', extensions: ['md'] },
      { name: 'html', extensions: ['htm', 'html'] },
      { name: 'txt', extensions: ['txt'] }
    ],
    properties: []
  };
  dialog.showSaveDialog(options, function (file) {
    if (file.canceled || !file) {
      return;
    }
    change_working_directory(path.dirname(file));
    filename = path.basename(file);
    save(output);
  });
}

function change_working_directory(new_path) {
  working_directory = new_path;
  mainWindow.webContents.send('change-cwd', working_directory);
}

