import {ipcMain} from 'electron';
import path from "path";
import os from "os";
import fs from "fs";

export class Config {
    private readonly _config
    private readonly _configPath

    constructor() {
        const koalaHome = path.join(os.homedir(), '.koala');
        if (!fs.existsSync(koalaHome)) {
            console.log(`creating ${koalaHome}`)
            fs.mkdirSync(koalaHome);
        }

        this._configPath = path.join(koalaHome, 'koala.config.json');

        this._config = {};
        if (fs.existsSync(this._configPath)) {
            this._config = JSON.parse(fs.readFileSync(this._configPath).toString());
        }

        if (!("agentURL" in this._config)) {
            this._config["agentURL"] = ""
            fs.writeFileSync(this._configPath, JSON.stringify(this._config))
        }

        ipcMain.handle('getAgentURL', (event, message) => {
            return this.agentURL
        })

        ipcMain.on('setAgentURL', (event, agentURL) => {
            this.agentURL = agentURL
        })
    }

    get agentURL(): string {
        return this._config["agentURL"] as string
    }

    set agentURL(agentURL: string) {
        this._config["agentURL"] = agentURL
        fs.writeFileSync(this._configPath, JSON.stringify(this._config))
    }

}

