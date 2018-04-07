import Vue from 'vue'
import App from './App.vue'
import apollo from './apolloClient'
import store from './store'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$apollo = apollo

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
