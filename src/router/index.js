import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/FrontOffice/Home.vue'
import Cart from '../views/FrontOffice/Cart.vue'
import Wishlist from '../views/FrontOffice/Wishlist.vue'
import Checkout from '../views/FrontOffice/Checkout.vue'
import Settings from '../views/FrontOffice/Settings.vue'
import Product from '../views/FrontOffice/Product.vue'
import Category from '../views/FrontOffice/Category.vue'
import Orders from '../views/FrontOffice/Orders.vue'
import ResetPassword from '../views/FrontOffice/ResetPassword.vue'
import PageNotFound from '../views/FrontOffice/PageNotFound.vue'
import Dashboard from '../views/BackOffice/Dashboard.vue'
import Users from '../views/BackOffice/Users.vue'
import store from "@/store";

const routes = [
  {
    path: '/:pathMatch(.*)*',
    name: 'pagenotfound',
    component: PageNotFound
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/panier',
    name: 'panier',
    component: Cart
  },
  {
    path: '/liste-souhaits', 
    name: 'liste-souhaits',
    component: Wishlist
  },
  {
    path: '/caisse', 
    name: 'caisse',
    component: Checkout
  },
  {
    path: '/parametres', 
    name: 'parametres',
    component: Settings,
    beforeEnter: (to, from, next) => {
      if (!store.getters["Auth/authenticated"]) {            
        return next({ name: "pagenotfound" });
      }

      next();
    }
  },
  {
    path: '/produit', 
    name: 'produit',
    component: Product
  },
  {
    path: '/categorie', 
    name: 'categorie',
    component: Category
  },
  {
    path: '/orders', 
    name: 'orders',
    component: Orders
  },
  {
    path: '/reset-password/:token', 
    name: 'reset-password',
    component: ResetPassword
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  // Route Admin
  {
    path: '/dashboard', 
    name: 'dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      if (!store.getters["Auth/authenticated"]) {            
        return next({ name: "pagenotfound" });
      }
      next();
    }
  },
  {
    path: '/dashboard/users', 
    name: 'users',
    component: Users,
    beforeEnter: (to, from, next) => {
      if (!store.getters["Auth/authenticated"]) {            
        return next({ name: "pagenotfound" });
      }
      next();
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
