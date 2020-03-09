<template>
  <form class="login_form" @submit.prevent="login" >
    <h1 class="title">Login</h1>
    <section>
        <b-field label="Email">
            <b-input type="email"
                v-model="email"
                maxlength="30">
            </b-input>
        </b-field>

        <b-field label="Password">
            <b-input type="password"
                v-model="password"
                password-reveal>
            </b-input>
            
        </b-field>
         <b-field grouped position="is-right">
            <p class="control">
                <b-button type="is-primary"
                          native-type="submit">
                          Login
                </b-button>
            </p>
        </b-field>
    </section>
  </form>
</template>


<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
      login() {
        this.$store.dispatch('USER_LOGIN', {email: this.email, password: this.password})
        .then(() => this.$router.push({name: 'posts'}))
        .catch(err => console.log(err));
      }
    }
}
</script>

<style scoped>
  .login_form {
    max-width: 300px;
    margin: 0 auto;
    margin-top: 15vh;
    -webkit-box-shadow: -1px 4px 24px 2px rgba(0,0,0,0.39); 
    box-shadow: -1px 4px 24px 2px rgba(0,0,0,0.39);
    padding: 4%;
    border-radius: 5px;
  }
</style>