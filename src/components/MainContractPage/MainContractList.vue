<template>
  <div >
    <h1>Main Contract List</h1>
    <ul v-if="vendors">
      <li v-for="vendor in vendors" :key="vendor.VendorCode"> {{vendor.VendorCode}} </li>
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
      vendors: state => state.vendors.items
    })
  },
  created(){
    console.log('Main Contract List vue instance created!');
    this.fetchVendors();
    
  },
  methods:{
    ...mapActions({
      fetchVendors: 'vendors/fetchData',
      fetchMore:'vendors/fetchData'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
