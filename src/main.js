// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'Vuetify'
import store from '@/store/index'

Vue.config.productionTip = false
Vue.use(Vuetify,{
  theme:{
    primary: "#212121",
    secondary: "#FFEA00",
    accent: "#FF5722",
    error: "#f44336",
    warning: "#FFAB00",
    info: "#BDBDBD",
    success: "#4caf50"
  }
});
import 'vuetify/dist/vuetify.min.css';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
