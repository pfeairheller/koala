import {contextBridge, ipcRenderer} from 'electron';

contextBridge.exposeInMainWorld('koala', {
  initialize: (passcode: string) => ipcRenderer.invoke('initialize', passcode),
  makeHab: (name: string) => ipcRenderer.invoke('makeHab', name)
})

contextBridge.exposeInMainWorld('config', {
  sendMessage: (message:string) => ipcRenderer.send('message', message),
  setAgentURL: (agentURL:string) => ipcRenderer.send("setAgentURL", agentURL),
  getAgentURL: () => ipcRenderer.invoke("getAgentURL")
})
