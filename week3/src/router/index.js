import Vue from 'vue'
import Router from 'vue-router'
import elHome from '@/components/elHome'
import elOrders from '@/components/elOrders'
import elProduct from '@/components/elProduct'


Vue.use(Router)

export default new Router({
  // mode: "history",
  routes: [
    {
      path: '/',
      alias: '/home',
      name: 'elHome',
      component: elHome
    },
    {
      path: '/orders',
      name: 'elOrders',
      component: elOrders
    },
    {
      path: '/product',
      name: 'elProduct',
      component: elProduct
    }
  ]
})
