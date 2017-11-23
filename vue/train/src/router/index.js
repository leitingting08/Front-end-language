import Vue from 'vue'
import Router from 'vue-router'
import Query from '@/components/Query'
import OrderList from '@/components/OrderList'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: Query},
    {path: '/OrderList',component: OrderList}
  ]
})
