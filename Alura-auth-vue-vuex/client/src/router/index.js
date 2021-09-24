import Vue from 'vue'
import VueRouter from 'vue-router'
import Gerentes from '../views/Gerentes.vue'
import Home from '../views/Home.vue'
import NovoUsuario from '../views/NovoUsuario.vue'
import Login from '../views/Login.vue'
import provider from '@/provider'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'home',
    component: Home,
    meta: {
      publica: false
    }
  },
  {
    path: '/gerentes',
    name: 'gerentes',
    component: Gerentes,
    meta: {
      publica: false
    }
  },
  {
    path: '/cadastre-se',
    name: 'novo.usuario',
    component: NovoUsuario,
    meta: {
      publica: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      publica: true
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((routeTo, routeFrom, next) => {
  if (!routeTo.meta.publica && !provider.state.token) {
    return next({ path: '/login' })
  }
  next()
})

export default router
