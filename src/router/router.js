import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import BrandsView from '../views/BrandsView.vue'
import ContactView from '../views/ContactView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }, {
    path: '/about',
    name: 'about',
    component: AboutView
  }, {
    path: '/brands',
    name: 'brands',
    component: BrandsView
  }, {
    path: '/contact',
    name: 'contact',
    component: ContactView
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  setTimeout(() => {
    if (appLoading) {
      appLoading.style.display = "none";
    }
  }, 1000);
})

export default router
