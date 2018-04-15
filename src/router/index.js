import Vue from 'vue'
import Router from 'vue-router'
import MainContractPage from '@/components/MainContractPage/MainContractPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainContractPage',
      component: MainContractPage
    }
  ]
})
