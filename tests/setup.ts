import { afterEach, beforeAll } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

// Mock electron API
beforeAll(() => {
  ;(window as Window & { electronAPI?: unknown }).electronAPI = {
    onMainProcessMessage: (callback: (message: string) => void) => {
      // Mock implementation - can be called during tests
      callback('Test message')
    }
  }
})

// Cleanup after each test
afterEach(() => {
  cleanup()
})
