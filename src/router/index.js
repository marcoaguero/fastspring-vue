import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PurchaseSuccess from '../views/PurchaseSuccess.vue'
import Details from '../views/Details.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/purchase_success',
      name: 'purchaseSuccess',
      component: PurchaseSuccess
    },
    {
      path: '/:productId',
      name: 'details',
      component: Details
    }
  ]
})

export default router
