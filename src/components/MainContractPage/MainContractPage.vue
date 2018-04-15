<template>
  <div>
    <main-contract-filters></main-contract-filters>
    <main-contract-list></main-contract-list>
    
  </div>
</template>

<script>
import MainContractList from '@/components/MainContractPage/MainContractList'
import MainContractFilters from '@/components/MainContractPage/MainContractFilters'
export default {
  name: 'MainContractPage',
  components :{
    'main-contract-list': MainContractList,
    'main-contract-filters': MainContractFilters
  }
}
</script>

<style scoped>

</style>


