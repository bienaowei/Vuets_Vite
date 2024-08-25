import { createApp } from 'vue'
import App from './App.vue'
import { ViteSSG } from 'vite-ssg';
import NProgress from 'nprogress'

import '@unocss/reset/tailwind.css';
import './styles/main.css'
import 'uno.css'
import { createHead } from "@unhead/vue"
const head = createHead()


import { createRouter, createWebHistory } from 'vue-router'
//自动读取刚才配置的目录（views）下的页面，不需要自己再写routes
import generatedRoutes from '~pages'
// 自动读取 layouts文件夹下的文件
import { setupLayouts } from "virtual:generated-layouts"

const router = createRouter({
  history: createWebHistory(),
  routes: setupLayouts(generatedRoutes),//更改原来的generatedRoutes
})

router.beforeEach(async (to, from) => {
  NProgress.start()
})

router.afterEach(to => {
  NProgress.done()
})

import { createPinia } from 'pinia'
const pinia = createPinia()

const app = createApp(App);  

import { install as installI18n } from './modules/i18n'; 
installI18n({app})

app.use(router).use(pinia).use(head).mount('#app')
// export const createApp=ViteSSG(App,{},({}))