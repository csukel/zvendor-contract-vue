<template>
    <v-toolbar color="primary">
        <v-btn  v-if="!isRoot" icon  @click="onNavBack()">
            <v-icon color="white">arrow_back</v-icon>
        </v-btn>
        <v-toolbar-title class="white--text">Vendor Contract Management</v-toolbar-title>
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


