<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex class="mt-4" v-for="item in items" :key="item.name" xs3>
        <v-card :to="item.route" :class="`${item.class} card-link curl`" height="150px">
          <v-card-text class="px-0">
            <h5 class="cardtext">{{ item.name }}</h5></v-card-text
            <img width="100%" :src="item.image" alt="" />
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  data() {
    return {
      name: '',
      items: [
        { name: 'open', href: '', image: '', route: '/open', class: 'open' },
        { name: 'open', href: '', image: '', route: '/open', class: 'open' },
        { name: 'open', href: '', image: '', route: '/open', class: 'open' },
        { name: 'open', href: '', image: '', route: '/open', class: 'open' },
        { name: 'open', href: '', image: '', route: '/open', class: 'open' },
        { name: 'open', href: '', image: '', route: '/open', class: 'open' },
      ]
    }
  },
  components: {

  }
}
</script>

<style lang="scss">
html {
  margin-top: 45px;
  overflow: auto;
  max-height: 100vh;
}
.v-card {
  background-color: transparent;
}
.cardtext {
  margin: auto;
  width: 55%;
  color: white;
  font-weight: bold;
  background-color: rgba(126, 126, 126, 0.5);
}
.card-link {
  background-image: url("");
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center;
  background-size: 210px 150px;
  border-radius: 50px;
}
.open {
  background-image: url("");
}
</style>
