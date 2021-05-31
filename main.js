import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
import navbar from 'components/navbar.vue'
Vue.use(uView)
Vue.component('my-navbar',navbar)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
