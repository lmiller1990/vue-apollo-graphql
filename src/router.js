import Vue from 'vue'
import VueRouter from 'vue-router'
import LanguageContainer from './LanguageContainer'
import App from './App'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      name: 'language-container',
      path: '/:id',
      component: LanguageContainer,
    }
  ]
})
