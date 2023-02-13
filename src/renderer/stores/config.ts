import {defineStore} from "pinia";
import {computed, ref} from "vue";


export const useConfig = defineStore("Config", () => {
    const agentURL = ref("")

    window.config.getAgentURL().then((result) => {
        agentURL.value = result
    })

    const registered = computed(() => {
        return agentURL.value != ""
    })

    return {agentURL, registered}
})