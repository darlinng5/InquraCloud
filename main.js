const { app, BrowserWindow } = require('electron');
const { autoUpdater } = require("electron-updater");
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    },
  });

  win.loadFile(path.join(__dirname, 'dist', 'index.html'));

  // Verificar actualizaciones
  autoUpdater.checkForUpdatesAndNotify();
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Eventos de actualización
autoUpdater.on('update-available', () => {
  console.log('Una actualización está disponible');
});

autoUpdater.on('update-downloaded', () => {
  console.log('Actualización descargada');
});