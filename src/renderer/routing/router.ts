import {createRouter, createWebHistory, RouterOptions, RouterView} from 'vue-router'

export const routerHistory = createWebHistory()
export const router = createRouter({
    routes: [],
    history: routerHistory,
    strict: true,
} as RouterOptions)

