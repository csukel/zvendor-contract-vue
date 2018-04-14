<template>
  <v-app id="app">
    <ptl-header></ptl-header>
    <router-view/>
  </v-app>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'App',
  components:{
    "ptl-header" : Header
  }
}
</script>

<style>

</style>
