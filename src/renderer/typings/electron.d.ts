/**
 * Should match main/preload.ts for typescript support in renderer
 */
export interface StorageAPI {
  sendMessage(message: string): void
  getAgentURL(): Promise<string>
  setAgentURL(string: string): void
}

export default interface AppAPI {
  initialize(passcode: string): Promise<string>
  makeHab(name: string): Promise<string>
}

declare global {
  interface Window {
    config: StorageAPI,
    koala: AppAPI
  }
}
