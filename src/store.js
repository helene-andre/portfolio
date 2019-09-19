import Vue from 'vue'
import Vuex from 'vuex'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
const VueScrollTo = require('vue-scrollto')

Vue.use(Vuex, VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
