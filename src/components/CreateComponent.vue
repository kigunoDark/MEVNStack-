<template>
<section>
  <Resourses v-if='!ISLOGEDIN' />

  <section class="create_form" v-if='ISLOGEDIN'>
  <h1 class='title'>Create a post</h1>
    <form @submit.prevent = "addPost">
      <b-field label="Post title">
          <b-input type="text" class="form-control" v-model="post.title"></b-input>
      </b-field>
      <b-field label="Post body">
            <b-input maxlength="200" type="textarea"  v-model="post.body"></b-input>
      </b-field>
      <b-button tag="input"
                native-type="submit"
                value="Create" 
                type="is-primary" 
                class="create_btn" />
    </form>
  </section>
</section>
</template>

<script>
import Resourses from './Resourses/Resourses';
import { mapGetters } from 'vuex';

export default {
  computed: mapGetters(['ISLOGEDIN']),
  data() {
    return {
      post: {}
    }
  },
  methods: {
    addPost() {
      this.$store.dispatch('SAVE_POST', this.post);
      this.$router.push({name:'posts'});
    }
  },
  components: {
    Resourses
  }
};
</script>

<style scoped>
   .create_form {
      max-width: 350px;
    margin: 0 auto;
    height: 450px;
    margin-top: 7vh;
    -webkit-box-shadow: -1px 4px 24px 2px rgba(0,0,0,0.39); 
    box-shadow: -1px 4px 24px 2px rgba(0,0,0,0.39);
    padding: 3%;
    border-radius: 5px;
   }

   .create_btn {
     float: right;
   }
</style>