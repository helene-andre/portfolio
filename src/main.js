import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'

Vue.config.productionTip = false

Vue.use(
  Vuetify, { iconfont: 'icon' }
)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
