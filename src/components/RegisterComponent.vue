<template>
  <form class="login_form"  @submit.prevent = "addUser">
    <h1 class="title">Sign up</h1>
    <section>
       <b-field label="Name">
            <b-input type="text"  v-model="user.name">
            </b-input>
        </b-field>

       <b-field label="Surname">
            <b-input type="text"  v-model="user.surname">
            </b-input>
        </b-field>

        <b-field label="Email"
            message="This email is invalid">
            <b-input type="email"
                value="john@"
                v-model="user.email">
                maxlength="30">
            </b-input>
        </b-field>

        <b-field label="Password">
            <b-input type="password"
                v-model="user.password"
                password-reveal>
            </b-input>
        </b-field>

        <b-field label="Repeat password">
            <b-input type="password"
                v-model="user.cpassword"
                password-reveal>
            </b-input>
        </b-field>

         <b-field grouped position="is-right">
            <p class="control">
                <b-button native-type="submit"
                value="Create" 
                type="is-primary">Подтвердить</b-button>
            </p>
        </b-field>
    </section>
  </form>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  data() {
    return {
      user: {}
    }
  },
  methods: {
    addUser() {
      this.$store.dispatch('REGISTER_USER', this.user)
      .then(() => this.$router.push({name: 'login'}))
      .catch(err => console.log(err));
    }
  }
}
</script>

<style scoped>
  .login_form {
    max-width: 300px;
    margin: 0 auto;
    margin-top: 2.5vh;
    -webkit-box-shadow: -1px 4px 24px 2px rgba(0,0,0,0.39); 
    box-shadow: -1px 4px 24px 2px rgba(0,0,0,0.39);
    padding: 3%;
    border-radius: 5px;
  }
</style>