import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [{

  // 登录组件
  path: '/login',
  component: Login
},

  // home组件
  {
    path: '/home',
    component: Home
  },
  {
    path: '/',
    redirect: '/login'
  }
]

const router = new VueRouter({
  routes
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    return next()
  }

  // 获取token
  const token = window.sessionStorage.getItem('token')
  if (!token) {
    return next('/login')
  }

  return next()
})

export default router
