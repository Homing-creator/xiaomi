import Vue from 'vue'
import Router from 'vue-router'
import Product from './views/Product'
import Redmi8A from './components/Product/Redmi8A'
import MyIndex from './views/MyIndex'
import Login from './views/Login'
import ShoppingCart from './views/ShoppingCart'
import Register from './views/Register'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/home', component: MyIndex },
    { path: '/', redirect: '/home', component: MyIndex },
    {
      path: '/products',
      component: Product,
      children: [
        { path: 'redmi8a', component: Redmi8A }
      ]
    },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/shoppingcart', component: ShoppingCart }
  ]
})
