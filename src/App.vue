<template>
  <v-container fluid>
    <SimpleNav />
    <router-view />
  </v-container>
</template>

<script>
import SimpleNav from '@/components/SimpleNav'
export default {
  name: 'App',
  components: {
    SimpleNav
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">
@import "./assets/css/main.css";
@import "./assets/css/photon.min.css";
</style>

