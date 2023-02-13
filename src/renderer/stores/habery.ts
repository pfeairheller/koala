import {defineStore} from "pinia";
import {ref} from "vue";

export const useHabery = defineStore("Habery", () => {
    const habs = ref([])
    const agentURL = ref("")
    const commAid = ref("")

    function initialize(passcode: string) {
        window.koala.initialize(passcode).then((result) => {
            commAid.value = result
        })
    }

    function makeHab(passcode: string) {
    }

    return {habs, commAid, agentURL, makeHab, initialize}
})
