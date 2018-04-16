// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

Vue.use(Buefy)

Vue.config.productionTip = false

Vue.filter('untag', function (value) {
  if (!value) return ''
  value = value.toString()
  let regex = /(<([^>]+)>)/ig
  return value.replace(regex, '')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
