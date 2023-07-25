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
        redirect: `/${ROUTE.HOME}`,
    },
    {
        path: `/${ROUTE.HOME}`,
        name: ROUTE.HOME,
        // 1.使用路由懒加载，只有切换到当前路由才会加载组件
        // 2.使用webpack分割代码功能，通过将不同组件分割在不同块中，实现代码优化
        component: () => import(/* webpackChunkName: "home" */ '@/components/Home.vue'),
    },
    {
        path: `/${ROUTE.PAGE}`,
        name: ROUTE.PAGE,
        component: () => import(/* webpackChunkName: "page" */ '@/components/Page.vue'),
    },
    {
        path: `/${ROUTE.SEMANTIC_TAG}`,
        name: ROUTE.SEMANTIC_TAG,
        component: () => import(/* webpackChunkName: "semantic-tag" */ '@/components/SemanticTag.vue'),
    },
    {
        path: `/${ROUTE.WEB_SOCKET}`,
        name: ROUTE.WEB_SOCKET,
        component: () => import(/* webpackChunkName: "web-socket" */ '@/components/WebSocket.vue'),
    },
    {
        path: `/${ROUTE.WEB_WORK}`,
        name: ROUTE.WEB_WORK,
        component: () => import(/* webpackChunkName: "web-work" */ '@/components/WebWorker.vue'),
    },
]

const router = createRouter({
    // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

export default router
