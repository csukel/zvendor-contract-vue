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
          <v-select label="Vendor" @change="clearVendorList()" clearable multiple autocomplete max-height="300px" item-text="VendorName" item-value="VendorCode" :loading="vendorSelectLoading" cache-items chips :items="vendors" v-model="selectVendors" :search-input.sync="searchVendors">
            <template slot="item" slot-scope="data" style="overflow: scroll">
              <span>{{data.item.VendorCode}} - {{ data.item.VendorName}}</span>
            </template>
            <template slot="selection" slot-scope="data">
              <v-chip>
                 {{ data.item.VendorName}}

              </v-chip>
            </template>
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
          <v-btn @click="fitlerContractList()" light class="secondary">Filter</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "MainContractFilters",
  created() {
    //this.fetchVendors();
  },
  data() {
    return {
      vendorSelectLoading: false,
      selectVendors: [],
      //vendors:['giannis'],
      searchVendors: null
    };
  },
  computed: {
    // ...mapState({
    //   vendors: 'vendors/items'
    // })
    ...mapGetters({
      vendors: "vendors/getItems"
    })
  },
  methods: {
    ...mapActions({
      fetchVendors: "vendors/fetchData",
      clearVendorList: "vendors/reset"
    }),
    queryVendorSelections(val) {
      this.$store.dispatch("vendors/queryFilter", val);
    },
    fitlerContractList(){
      debugger;
      var t = null;
    }
  },
  watch: {
    searchVendors(val) {
      val && this.queryVendorSelections(val.toUpperCase());
    }
  }
};
</script>

<style scoped>

</style>


