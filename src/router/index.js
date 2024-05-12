/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
// import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import layout from "@/layouts/default.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    extendRoutes: setupLayouts,
    routes:[
        // // 登入
        // {
        //     path: "/login",
        //     name: "Login",
        //     component: () => import("@/pages/login.vue")
        // },
        // // 建立帳戶
        // {
        //     path: "/create",
        //     name: "Create",
        //     component: () => import("@/pages/createAccount.vue"),
        // },
        // // 首頁
        // {
        //     path: "/",
        //     name: "Home",
        //     component: () => import("@/pages/home.vue"),
        //     meta: { layout: "layout" },
        // },
        // // 關於我們
        // {
        //     path: "/about",
        //     name: "About",
        //     component: () => import("@/pages/about.vue"),
        //     meta: { layout: "layout" },
        // },
        // // 購物車
        // {
        //     path: "/cart",
        //     name: "Cart",
        //     component: () => import("@/pages/cart.vue"),
        //     meta: { layout: "layout" },
        // },
        // // 商店
        // {
        //     path: "/shop",
        //     name: "Shop",
        //     component: () => import("@/pages/shop.vue"),
        //     meta: { layout: "layout" },
        // },

        {
            path: "/",
            name: "",
            component: layout,
            children: [
                {
                    path: "",
                    name: "Home",
                    components: {
                        default: () => import("@/pages/home.vue"),
                    },
                    meta: { title: "首頁" }
                },
                {
                    path: "/about",
                    name: "About",
                    components: {
                        default: () => import("@/pages/about.vue"),
                    },
                    meta: { title: "關於我們" }
                },
                {
                    path: "/shop",
                    name: "Shop",
                    components: {
                        default: () => import("@/pages/shop.vue"),
                    },
                    meta: { title: "商店" }
                },
                {
                    path: "/cart",
                    name: "Cart",
                    components: {
                        default: () => import("@/pages/cart.vue"),
                    },
                    meta: { title: "購物車" }
                },
                {
                    path: "/login",
                    name: "Login",
                    components: {
                        default: () => import("@/pages/login.vue"),
                    },
                    meta: { title: "登入" }
                },
                {
                    path: "/create",
                    name: "Create",
                    components: {
                        default: () => import("@/pages/createAccount.vue"),
                    },
                    meta: { title: "建立帳號" }
                },
            ]
        },
    ]
})

export default router;
