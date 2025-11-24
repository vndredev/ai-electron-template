import { test, expect, _electron as electron } from '@playwright/test'
import { ElectronApplication, Page } from 'playwright'

let electronApp: ElectronApplication
let page: Page

test.beforeAll(async () => {
  // Launch Electron app
  electronApp = await electron.launch({
    args: ['out/main/index.js'],
  })
  page = await electronApp.firstWindow()
})

test.afterAll(async () => {
  await electronApp.close()
})

test('app launches and shows main window', async () => {
  // Check window title
  const title = await page.title()
  expect(title).toBe('AI Electron Template')
})

test('app shows correct header', async () => {
  const header = await page.locator('h1').textContent()
  expect(header).toBe('AI Electron Template')
})

test('counter button works', async () => {
  const button = page.locator('button:has-text("count is")')
  await button.click()
  await expect(button).toContainText('count is 1')
})
