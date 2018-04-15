import Vuex from 'vuex'
import Vue from 'vue'
import service from './modules/service'
import vendors from './modules/vendors'
import mainContracts from './modules/mainContracts'
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        service,
        vendors,
        mainContracts
    }
})