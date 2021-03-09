import Vue from 'vue'
import App from './App'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'

require('../node_modules/marked/lib/marked.js')
require('../node_modules/kity/dist/kity.js')
require('../node_modules/hotbox/hotbox.js')
require('../node_modules/kityminder-core/dist/kityminder.core.js')
require('./script/expose-editor.js')

Vue.config.productionTip = true
Vue.use(ElementUI)

new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: {
    App
  }
})
