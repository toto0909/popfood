import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import WeatherView from '../views/WeatherView.vue'
import SearchView from '../views/SearchView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'search',
    component: SearchView
  },
  {
    path: '/weather',
    name: 'weather',
    component: WeatherView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
