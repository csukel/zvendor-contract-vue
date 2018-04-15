<template>
  <div>
    <h1>Filters Panel</h1>
    <v-container fluid grid-list-md>
      <v-layout row wrap align-baseline>
        <v-flex xs12 md3 lg1>
          <v-text-field label="Keywords">
          </v-text-field>
        </v-flex>
        <v-flex xs12 md3 lg2>
          <v-select label="Vendor"
            autocomplete
            multiple
            :loading="vendorSelectLoading"
            chips
            :items="vendors"
            v-model="selectVendors"
            :search-input.sync="searchVendors">
          </v-select>
        </v-flex>
        <v-flex xs12 md3 lg2>
          <v-text-field label="Title">
          </v-text-field>
        </v-flex>
        <v-flex xs12 md3 lg2>
          <v-text-field label="Project">
          </v-text-field>
        </v-flex>
        <v-flex xs12 md3 lg1>
          <v-text-field label="Contract Type">
          </v-text-field>
        </v-flex>
        <v-flex xs12 md3 lg2>
          <v-text-field label="Contract Reference">
          </v-text-field>
        </v-flex>
        <v-flex xs12 md3 lg1>
          <v-text-field label="Contract No">
          </v-text-field>
        </v-flex>
        <v-flex xs12 md3 lg1>
          <v-btn light class="secondary">Filter</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState,mapActions } from "vuex";
export default {
  name: "MainContractFilters",
  created(){
    this.fetchVendors();
  },
  data(){
    return{
      vendorSelectLoading: false,
      selectVendors:[],
      vendors:[],
      searchVendors : null
    }
  },
  computed: {
    // ...mapState({
    //   vendors: 'vendors/items'
    // })
  },
  methods:{
    ...mapActions({
      fetchVendors: 'vendors/fetchData'
    }),
    queryVendorSelections(val){
      this.$store.dispatch('vendors/queryFilter')
    }
  },
  watch: {
    searchVendors(val){
      val && this.queryVendorSelections(val);
    }
  }
};
</script>

<style scoped>

</style>


