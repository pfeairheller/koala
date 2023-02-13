import {Salter} from "signify-ts";
import {Hab, Habery} from "signify-ts";
import {ipcMain} from "electron";
import {MtrDex} from "signify-ts";

export class App {
    private _cliHby: Habery | undefined
    private _conHby: Habery | undefined

    constructor() {
        ipcMain.handle('initialize', (event, passcode) => {
            this._cliHby = this.makeHby("signify", passcode)
            const hab = this._cliHby.makeHab("comm", {transferable: true})

            this._conHby = this.makeHby(hab.pre, passcode)

            return hab.pre
        })

        ipcMain.handle('makeHab', (event, name) => {
            return this.makeHab(name).pre
        })

    }

    makeHby(name: string, passcode: string): Habery {
        if (passcode.length < 21) {
            throw new Error("Bran (passcode seed material) too short.")
        }

        let bran = MtrDex.Salt_128 + 'A' + passcode.substring(0, 21)  // qb64 salt for seed
        let salter = new Salter({qb64: bran})

        return new Habery({name: name, salt: salter.qb64})
    }

    makeHab(name: string): Hab {
        if (this._conHby == undefined) {
            throw new Error("Habery not initialized, must call makeHby first")
        }

        return this._conHby.makeHab(name, {})
    }

}