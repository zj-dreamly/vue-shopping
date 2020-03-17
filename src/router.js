import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import Welcome from './components/Welcome.vue'
import User from './components/user/User'

Vue.use(VueRouter)

const routes = [{

  // 登录组件
  path: '/login',
  component: Login
},

  // home组件
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',

    children: [
      {
        path: '/welcome',
        component: Welcome
      },
      {
        path: '/users',
        component: User
      }
    ]
  },

  // 根路径默认跳主页
  {
    path: '/',
    redirect: '/home'
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
