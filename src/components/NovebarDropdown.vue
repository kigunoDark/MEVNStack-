<template>
   <b-dropdown position="is-bottom-left"
               aria-role="menu">
    <a class="navbar-item"
        slot="trigger"
        role="button">
        <span>Profile</span>
    </a>
    <b-dropdown-item aria-role="menuitem">
        <router-link to='/posts' class="drop_link">Profile</router-link>
    </b-dropdown-item>
    <b-dropdown-item  aria-role="menuitem">
        <router-link to='/create' class="drop_link">Add post</router-link>
    </b-dropdown-item>
    <b-dropdown-item aria-role="menuitem">
          <router-link to='/posts' class="drop_link">Setings</router-link>
    </b-dropdown-item>
    <b-dropdown-item aria-role="menuitem">
        <b-button @click.prevent = "logout" tag="button"
                  native-type="submit">  Logout </b-button>
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
export default {
  
  methods: {
    logout() {
      this.$store.dispatch('LOGOUT')
      .then(() => this.$router.push({name: 'login'}))
      .catch(err => console.log(err));
    }
  }
}
</script>
<style scoped>
  .drop_link {
    color: rgb(82, 76, 76)
  }
</style>