const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')
const { updateElectronApp, UpdateSourceType } = require('update-electron-app')


let win

function createWindow() {
  win = new BrowserWindow({ width: 1200, height: 800 })

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'dist/inqura/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  win.on('closed', () => {
    win = null
  })
}
updateElectronApp({
    updateSource: {
      type: UpdateSourceType.ElectronPublicUpdateService,
      repo: 'darlinng5/InquraCloud',
      host:'https://update.electronjs.org'
    },
    updateInterval: 300000,
  })


app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
