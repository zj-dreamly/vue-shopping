import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import Welcome from './components/Welcome.vue'
import User from './components/user/User'
import Rights from './components/power/Rights'
import Roles from './components/power/Roles'

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
      // 用户列表
      {
        path: '/users',
        component: User
      },
      // 权限列表
      {
        path: '/rights',
        component: Rights
      },
      // 角色列表
      {
        path: '/roles',
        component: Roles
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
