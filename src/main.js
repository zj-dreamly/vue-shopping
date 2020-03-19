import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/css/global.css'
// 导入字体图标
import './assets/fonts/iconfont.css'
// 引入axios
import axios from 'axios'
// 引入vue-table-with-tree-grid
import TreeTable from 'vue-table-with-tree-grid'
// 配置请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1'

// 配置header
axios.interceptors.request.use(config => {
  const token = window.sessionStorage.getItem('token')
  if (token != null) {
    config.headers.Authorization = window.sessionStorage.getItem('token')
  }
  return config
})

Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.component('tree-table', TreeTable)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
