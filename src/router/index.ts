import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

export enum ROUTE {
  HOME = 'home',
  PAGE = 'page',
  SEMANTIC_TAG = 'semantic-tag',
  WEB_SOCKET = 'web-socket',
  WEB_WORK = 'web-work',
  LOAD_IMG_LAZY = 'load-img-lazy',
  INFINITE_SCROLL = 'infinite-scroll',
  DOM_OPERATION = 'dom-operation',
  ABOUT_REQUEST = 'about-request',
}

const routes = [
  {
    path: '/',
    redirect: `/${ROUTE.HOME}`
  },
  {
    path: `/${ROUTE.HOME}`,
    name: ROUTE.HOME,
    // 1.使用路由懒加载，只有切换到当前路由才会加载组件
    // 2.使用webpack分割代码功能，通过将不同组件分割在不同块中，实现代码优化
    component: async () => await import(/* webpackChunkName: "home" */ '@/components/Home.vue')
  },
  {
    path: `/${ROUTE.PAGE}`,
    name: ROUTE.PAGE,
    component: async () => await import(/* webpackChunkName: "page" */ '@/components/Page.vue')
  },
  {
    path: `/${ROUTE.SEMANTIC_TAG}`,
    name: ROUTE.SEMANTIC_TAG,
    component: async () => await import(/* webpackChunkName: "semantic-tag" */ '@/components/SemanticTag.vue')
  },
  {
    path: `/${ROUTE.WEB_SOCKET}`,
    name: ROUTE.WEB_SOCKET,
    component: async () => await import(/* webpackChunkName: "web-socket" */ '@/components/WebSocket.vue')
  },
  {
    path: `/${ROUTE.WEB_WORK}`,
    name: ROUTE.WEB_WORK,
    component: async () => await import(/* webpackChunkName: "web-work" */ '@/components/WebWorker.vue')
  },
  {
    path: `/${ROUTE.LOAD_IMG_LAZY}`,
    name: ROUTE.LOAD_IMG_LAZY,
    component: async () => await import(/* webpackChunkName: "load-img-lazy" */ '@/components/LoadImgLazy.vue')
  },
  {
    path: `/${ROUTE.INFINITE_SCROLL}`,
    name: ROUTE.INFINITE_SCROLL,
    component: async () => await import(/* webpackChunkName: "infinite-scroll" */ '@/components/InfiniteScroll.vue')
  },
  {
    path: `/${ROUTE.DOM_OPERATION}`,
    name: ROUTE.DOM_OPERATION,
    component: async () => await import(/* webpackChunkName: "dom-operation" */ '@/components/DomOperation.vue')
  },
  {
    path: `/${ROUTE.ABOUT_REQUEST}`,
    name: ROUTE.ABOUT_REQUEST,
    component: async () => await import(/* webpackChunkName: "about-request" */ '@/components/AboutRequest.vue')
  },
  {
    path: '/:notFountUrl(.*)*',
    name: 'not-found',
    component: async () => await import(/* webpackChunkName: "not-found" */ '@/components/404.vue')
  }
]

const router = createRouter({
  // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes // `routes: routes` 的缩写
})

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    next({ name: 'not-found' })
  } else {
    next()
  }
})

export default router
