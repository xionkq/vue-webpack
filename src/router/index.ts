import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

export enum ROUTE {
    HOME = 'home',
    PAGE = 'page',
    SEMANTIC_TAG = 'semantic-tag',
    WEB_SOCKET = 'web-socket',
    WEB_WORK = 'web-work',
}

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: ROUTE.HOME,
        component: () => import('@/components/Home.vue')
    },
    {
        path: '/page',
        name: ROUTE.PAGE,
        component: () => import('@/components/Page.vue')
    }
]

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

export default router
