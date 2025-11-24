import pkg from 'electron-updater'
const { autoUpdater } = pkg
import log from 'electron-log'
import { BrowserWindow } from 'electron'

// Configure updater logging
autoUpdater.logger = log
log.transports.file.level = 'info'

export function setupAutoUpdater(mainWindow: BrowserWindow | null) {
  // Disable auto-download (let user decide)
  autoUpdater.autoDownload = false

  autoUpdater.on('checking-for-update', () => {
    log.info('Checking for update...')
  })

  autoUpdater.on('update-available', (info) => {
    log.info('Update available:', info)
    // TODO: Notify user via IPC
    mainWindow?.webContents.send('update-available', info)
  })

  autoUpdater.on('update-not-available', (info) => {
    log.info('Update not available:', info)
  })

  autoUpdater.on('error', (err) => {
    log.error('Error in auto-updater:', err)
  })

  autoUpdater.on('download-progress', (progressObj) => {
    log.info('Download progress:', progressObj.percent)
    mainWindow?.webContents.send('download-progress', progressObj)
  })

  autoUpdater.on('update-downloaded', (info) => {
    log.info('Update downloaded:', info)
    // TODO: Notify user and ask to restart
    mainWindow?.webContents.send('update-downloaded', info)
  })

  // Check for updates on app start (in production)
  if (process.env.NODE_ENV === 'production') {
    autoUpdater.checkForUpdatesAndNotify()
  }
}
