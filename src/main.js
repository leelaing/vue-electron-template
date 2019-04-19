import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuefire from 'vuefire'
import { db, rtdb } from './firebase.js'


Vue.use(Vuefire)
Vue.use({ db, rtdb })


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
