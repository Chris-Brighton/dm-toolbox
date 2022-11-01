import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7ac61530 = () => interopDefault(import('../pages/campaign/index.vue' /* webpackChunkName: "pages/campaign/index" */))
const _468e9a1e = () => interopDefault(import('../pages/encounter/index.vue' /* webpackChunkName: "pages/encounter/index" */))
const _62e62cd0 = () => interopDefault(import('../pages/monster/index.vue' /* webpackChunkName: "pages/monster/index" */))
const _0da84626 = () => interopDefault(import('../pages/spell/index.vue' /* webpackChunkName: "pages/spell/index" */))
const _4dbae94c = () => interopDefault(import('../pages/table/index.vue' /* webpackChunkName: "pages/table/index" */))
const _2ac49426 = () => interopDefault(import('../pages/monster/create.vue' /* webpackChunkName: "pages/monster/create" */))
const _61d66d50 = () => interopDefault(import('../pages/spell/create.vue' /* webpackChunkName: "pages/spell/create" */))
const _7af87200 = () => interopDefault(import('../pages/monster/_id.vue' /* webpackChunkName: "pages/monster/_id" */))
const _d284cbe4 = () => interopDefault(import('../pages/spell/_id.vue' /* webpackChunkName: "pages/spell/_id" */))
const _2063388d = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/campaign",
    component: _7ac61530,
    name: "campaign"
  }, {
    path: "/encounter",
    component: _468e9a1e,
    name: "encounter"
  }, {
    path: "/monster",
    component: _62e62cd0,
    name: "monster"
  }, {
    path: "/spell",
    component: _0da84626,
    name: "spell"
  }, {
    path: "/table",
    component: _4dbae94c,
    name: "table"
  }, {
    path: "/monster/create",
    component: _2ac49426,
    name: "monster-create"
  }, {
    path: "/spell/create",
    component: _61d66d50,
    name: "spell-create"
  }, {
    path: "/monster/:id",
    component: _7af87200,
    name: "monster-id"
  }, {
    path: "/spell/:id",
    component: _d284cbe4,
    name: "spell-id"
  }, {
    path: "/",
    component: _2063388d,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
