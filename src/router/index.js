/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    extendRoutes: setupLayouts,
    routes:[
        // 登入
        {
            path: "/login",
            name: "Login",
            // component: () => import("@/views/Login.vue")
        },
        // 首頁
        {
            path: "/",
            name: "Home",
            components: {
                default: () => import("@/pages/index.vue")
            },
            meta: { },
        },
    ]
})

export default router;
