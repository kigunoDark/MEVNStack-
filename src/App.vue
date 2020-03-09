<template>
    <div> 
      <Navbar />
      <div class="container">
        <div>
           <router-view></router-view>
        </div>
      </div>
    </div>
</template>

<script>
import Navbar from './components/Navbar';
import {mapGetters} from 'vuex'
export default {
  computed: mapGetters(['ISLOGEDIN']),
  name: 'App',
  components: {
   Navbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>

