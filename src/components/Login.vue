<template>
  <v-container fluid>
    <h1 class="center">Login Page</h1>

    <form>
      <div class="form-group">
        <label>Email address</label>
        <input
          id="email"
          type="email"
          class="form-control"
          placeholder="Email"
          v-model="email"
        />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input
          id="password"
          type="password"
          class="form-control"
          placeholder="Password"
          v-model="password"
        />
      </div>
      <v-btn id="loginBtn" @click.prevent="login" class="btn btn-primary">
        Login
      </v-btn>
    </form>
  </v-container>
</template>

<script>
import { db, auth } from '../firebase.js'
import { firestore } from 'firebase'
export default {
  components: {

  },
  firebase: {

  },
  data() {
    return {
      currentUser: '',
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      auth.signInWithEmailAndPassword(this.email, this.password)
        .then(user => { this.$router.replace("/"); },
          error => { alert(error.message); });
      this.email = ''
      this.password = ''
    },
    logout() {
      auth.signOut()
        .then(() => {
          this.$router.replace('/login');
        });
    }
  },

}
</script>

<style>
@import "../assets/css/photon.min.css";
</style>
