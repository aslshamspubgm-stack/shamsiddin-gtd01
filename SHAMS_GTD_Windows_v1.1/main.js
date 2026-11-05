const { app, BrowserWindow, Menu, session } = require('electron');
const path = require('node:path');
const { pathToFileURL } = require('node:url');

const indexPath = path.join(__dirname, 'app', 'index.html');
const trustedAppUrl = pathToFileURL(indexPath).href;

function createWindow() {
  const win = new BrowserWindow({
    width: 1440,
    height: 920,
    minWidth: 900,
    minHeight: 620,
    title: 'SHAMS GTD',
    backgroundColor: '#101827',
    autoHideMenuBar: true,
    show: false,
    icon: path.join(__dirname, 'build', 'icon.ico'),
    webPreferences: {
      // Keep the renderer isolated from Node.js. No preload is needed yet:
      // the current UI does not require privileged desktop APIs.
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
      webSecurity: true,
      allowRunningInsecureContent: false,
      webviewTag: false
    }
  });

  // This app has no need to open child windows or navigate away from its UI.
  win.webContents.setWindowOpenHandler(() => ({ action: 'deny' }));
  win.webContents.on('will-navigate', (event, url) => {
    if (url !== trustedAppUrl) event.preventDefault();
  });
  win.webContents.on('will-attach-webview', event => event.preventDefault());

  win.once('ready-to-show', () => win.show());
  win.loadFile(indexPath);
}

app.whenReady().then(() => {
  Menu.setApplicationMenu(null);

  // The current app needs no permissions (camera, microphone, location, etc.).
  session.defaultSession.setPermissionRequestHandler((_webContents, _permission, callback) => {
    callback(false);
  });

  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
