import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/corporateSpace/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/personSpace/index.vue')
  },
  {
    path: '/add-authorization',
    name: 'AddAuthorization',
    component: () => import('../views/corporateSpace/addAuthorization.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
