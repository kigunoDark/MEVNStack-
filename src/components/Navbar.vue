<template>
   <b-navbar>
      <template slot="brand">
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img src='../logo.png'
                alt="Lightweight UI components for Vue.js based on Bulma">
          </b-navbar-item>
      </template>
      <template slot="end">
          <b-navbar-item tag="div">
              <div class="buttons" v-if='!ISLOGEDIN'>
                <router-link to='/signup' class="button is-primary">Sign up</router-link>
                <router-link to='/login' class="button is-light">Login</router-link>
              </div>
              <NavbarDropdown v-if='ISLOGEDIN === true' />
          </b-navbar-item>
      </template>
    </b-navbar>
</template>

<script>
import NavbarDropdown from './NovebarDropdown';
import {mapGetters} from 'vuex';

export default {
  computed: mapGetters(['ISLOGEDIN']),
  components: {
    NavbarDropdown
  }
};
</script>

<style scoped>
  .navbar {
    padding: 1%;
    -webkit-box-shadow: -1px 4px 24px 2px rgba(0,0,0,0.39); 
    box-shadow: -1px 4px 24px 2px rgba(0,0,0,0.39);
  }
</style>