const { app, BrowserWindow } = require('electron');
const path = require('path');
const { updateElectronApp, UpdateSourceType } = require('update-electron-app');

let win;

function createWindow() {
  win = new BrowserWindow({ width: 1200, height: 800 });

  let startUrl;
  if (app.isPackaged) {
    startUrl = new URL(path.join('file:', app.getAppPath(), 'dist', 'inqura', 'index.html')).href;
  } else {
    startUrl = new URL(path.join('file:', __dirname, 'dist', 'inqura', 'index.html')).href;
  }

  win.loadURL(startUrl);

  win.on('closed', () => {
    win = null;
  });
}

updateElectronApp({
  updateSource: {
    type: UpdateSourceType.ElectronPublicUpdateService,
    repo: 'darlinng5/InquraCloud',
    host: 'https://update.electronjs.org'
  },
  updateInterval: '5 minutes',
});

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});