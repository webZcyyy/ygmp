import Vue from 'vue'
import App from './App.vue'
import router from './routers/index'
import store from './store/index'
import MintUI from 'mint-ui'
import $ from 'jquery'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
