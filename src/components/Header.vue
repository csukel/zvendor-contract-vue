<template>
    <v-toolbar dark color="primary">
        <v-btn  v-if="!isRoot" icon  @click="onNavBack()">
            <v-icon >arrow_back</v-icon>
        </v-btn>
        <v-toolbar-title >Vendor Contracts</v-toolbar-title>
    </v-toolbar>
</template>

<script>
export default {
  name: "Header",
  computed: {
      isRoot (){
          return this.$route.path === '/' ;
      }
  },
  methods: {
      onNavBack(){
          this.$router.go(-1);
      }
  }
};
</script>

<style scoped>

</style>


