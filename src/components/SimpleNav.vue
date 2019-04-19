<template>
  <nav>
    <v-toolbar app>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="green--text">
        <v-icon color="green">attach_money</v-icon> MoneyApp
      </v-toolbar-title>

      <v-btn small flat to="/">Dashboard</v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn v-if="firebaseUser" small flat to="/login">Login</v-btn>
        <v-btn v-if="!firebaseUser" @click="logout" small flat>Logout</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer app v-model="drawer">
      <v-toolbar>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="black--text title">
              Main Menu
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list dense class="pt-0">
        <!--  -->
        <v-list-tile to="/">
          <v-list-tile-action>
            <v-icon class="fas fa-home black--text"></v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title class="black--text">Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <!--  -->

        <v-list-tile @click="logout">
          <v-list-tile-action>
            <v-icon class="fas fa-sign-out-alt black--text"></v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title class="black--text">Logout</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <!--  -->
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import { db, auth } from '../firebase.js'

export default {
  data() {
    return {
      drawer: false,
      firebaseUser: ''
    }
  },

  methods: {
    logout() {
      auth.signOut()
        .then(() => {
          this.$router.replace('/login');
        });
    }
  }
}
</script>

<style scoped>
</style>
