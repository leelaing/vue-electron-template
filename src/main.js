import Vue from 'vue'
import Meta from 'vue-meta'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
require('dotenv').config()
import Vuefire from 'vuefire'
import { db, rtdb } from './firebase.js'


Vue.use(Vuefire)
Vue.use({ db, rtdb })
Vue.use(Meta)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
