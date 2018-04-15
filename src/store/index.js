import Vuex from 'vuex'
import Vue from 'vue'
import service from './modules/service'
import vendors from './modules/vendors'
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        service,
        vendors
    }
})