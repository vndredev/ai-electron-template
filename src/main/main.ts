import { app, BrowserWindow } from 'electron'
import { join } from 'path'
import log from 'electron-log'
import { setupAutoUpdater } from './updater'

// Configure logging
log.transports.file.level = 'info'
log.transports.console.level = 'debug'

// The built directory structure (output by electron-vite)
// out/main/index.js
// out/preload/index.js
// out/renderer/index.html

let mainWindow: BrowserWindow | null = null

function createWindow(): void {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    show: false,
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      // Security: Enable context isolation (default since Electron 20)
      contextIsolation: true,
      // Security: Disable node integration in renderer
      nodeIntegration: false,
      // Security: Enable sandbox (default since Electron 20)
      sandbox: true,
      // Security: Enable web security
      webSecurity: true,
      // Security: Block insecure content
      allowRunningInsecureContent: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow?.show()
  })

  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow?.webContents.send('main-process-message', new Date().toLocaleString())
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (process.env.ELECTRON_RENDERER_URL) {
    mainWindow.loadURL(process.env.ELECTRON_RENDERER_URL)
    // Only open DevTools in development
    mainWindow.webContents.openDevTools()
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

// Error handling
process.on('uncaughtException', (error) => {
  log.error('Uncaught Exception:', error)
})

process.on('unhandledRejection', (reason) => {
  log.error('Unhandled Rejection:', reason)
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  log.info('App is ready')
  createWindow()

  // Setup auto-updater
  setupAutoUpdater(mainWindow)

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
