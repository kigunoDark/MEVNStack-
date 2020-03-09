<template>
<section>
 <Resourses v-if='!ISLOGEDIN'/>
 <section  class="edit_form"  v-if='ISLOGEDIN'>
  <h1>Edit the post</h1>
   <form @submit.prevent = "updatePost">
      <b-field label="Post title">
            <b-input type="text" class="form-control" v-model="POST.title"></b-input>
      </b-field>
      <b-field label="Post body">
            <b-input maxlength="200" type="textarea"  v-model="POST.body"></b-input>
      </b-field>
      <b-button tag="input"
                native-type="submit"
                value="Update" 
                type="is-primary" 
                class="edit_btn" />
    </form>
  </section>
</section>
</template>

<script>
import Resourses from './Resourses/Resourses';
import {mapGetters} from 'vuex';
export default {
  computed: mapGetters(['POST', 'ISLOGEDIN']),
  mounted() { this.$store.dispatch('GET_POST',this.$route.params.id); },
  methods: {
    updatePost(){ 
      this.$store.dispatch('UPDATE_POST', {id:this.$route.params.id, post: this.POST})
      .then(() => { console.log('Success'); this.$router.push({name:'posts'});})
      .catch(err => { console.log(err)})
    }
  },
  components: {
    Resourses
  }
}
</script>

<style scoped>

.edit_form {
  max-width: 30%;
  margin: 0 auto;
  margin-top: 7vh;
  -webkit-box-shadow: -1px 4px 24px 2px rgba(0,0,0,0.39); 
  box-shadow: -1px 4px 24px 2px rgba(0,0,0,0.39);
  padding: 5%;
  border-radius: 5px;
}

.edit_btn {
  float: right;
  margin-top: 10px;
}

</style>