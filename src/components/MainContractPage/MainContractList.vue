<template>
  <div >
    <h1>Main Contract List</h1>
    <ul v-if="contracts">
      <li v-for="contract in contracts" :key="contract.ContractNo">{{contract.ContractNo}}</li>
    </ul>
    <v-btn @click="fetchMore()">Load more</v-btn>
  </div>
</template>

<script>
import { mapState,mapActions } from "vuex";
export default {
  name: 'MainContractList',
  data () {
    return {
    }
  },
  computed:{
    ...mapState({
      contracts: state => state.mainContracts.items
    })
  },
  created(){
    console.log('Main Contract List vue instance created!');
    this.fetchMainContracts();
    
  },
  methods:{
    ...mapActions({
      fetchMainContracts: 'mainContracts/fetchData',
      fetchMore:'mainContracts/fetchData',
      clearList: 'mainContracts/reset'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
