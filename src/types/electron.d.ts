// Shared type definitions for Electron IPC

export interface ElectronAPI {
  onMainProcessMessage: (callback: (message: string) => void) => void
  // Add more IPC methods here as needed
  // Example:
  // sendMessage: (channel: string, data: unknown) => Promise<unknown>
  // invoke: <T = unknown>(channel: string, ...args: unknown[]) => Promise<T>
}

declare global {
  interface Window {
    electronAPI: ElectronAPI
  }
}
