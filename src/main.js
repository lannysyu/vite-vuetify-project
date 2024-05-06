/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

import "@/styles/all.scss";

// 路由工具
import router from "./router";

const app = createApp(App)

registerPlugins(app)

// 安裝額外插件
app.use(router);

// 掛載實體
app.mount('#app')
