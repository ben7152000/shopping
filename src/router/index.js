import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound'
import Products from '../views/Products'
import LandingPage from '../views/LandingPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: LandingPage
  },
  {
    path: '/products',
    name: 'products',
    component: Products
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import('../views/Product.vue')
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: () => import('../views/Favorites.vue')
  },
  {
    path: '/checkout/cart-list',
    name: 'cart-list',
    component: () => import('../views/CartList.vue')
  },
  {
    path: '/orders',
    name: 'orders',
    component: () => import('../views/Orders.vue')
  },
  {
    path: '/admin/signIn',
    name: 'admin-signIn',
    component: () => import('../views/admin/AdminSignIn.vue')
  },
  {
    path: '/admin/dashboard',
    name: 'admin-dashboard',
    component: () => import('../views/admin/AdminPanel.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
