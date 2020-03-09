<template>
  <section class="post_content">
    
    <h2 class="post_title">{{post.title}}</h2>
    <p>{{post.body}}</p>
    <template class="post_menu">
      <section>
        <b-field position="is-right" class="buttons_block">
          <b-button  v-if="AUTHEDUSER === post.userId" @click.prevent="deletePost(post._id)">
            <b-icon
                pack="far"
                icon="trash-alt"
                size="is-small">
            </b-icon>
          </b-button>
            <router-link v-if="AUTHEDUSER === post.userId" :to="{name:'edit', params:{id: post._id}}" tag="b-button">
              <b-icon
                  pack="fas"
                  icon="pencil-alt"
                  size="is-small">
              </b-icon>
            </router-link>
            <section>
              <section v-if="AUTHEDUSER !== post.userId" >
                <b-button @click.prevent = "updateClaps" 
                          tag="button"
                          native-type="submit">
                          {{post.claps}}      
                  <b-icon
                      pack="far"
                      icon="thumbs-up"
                      size="is-small">
                  </b-icon>
                </b-button>
              </section>
              <section v-else >
                  <b-button  tag="button"
                          native-type="submit">
                          {{post.claps}}      
                  <b-icon
                      pack="far"
                      icon="thumbs-up"
                      size="is-small">
                  </b-icon>
                  </b-button>
              </section>
            </section>
        </b-field>
      </section>
    </template>
  </section>
</template>

<script>
import {mapGetters} from 'vuex';
import Resourses from './Resourses/Resourses'
export default {
    computed: mapGetters(['AUTHEDUSER']) ,
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    updateClaps() {
      this.$store.dispatch('ADD_CLAPS', { id: this.post._id, claps: this.post.claps});
    },
    deletePost(id) {
      this.$store.dispatch('DELETE_POST', id);
    }
  },
  components: {
    Resourses
  }
};
</script>

<style scoped>
  .post_content {
    max-width: 60%;
    margin: 0 auto;
    margin-top: 50px;
    padding: 5%;
    -webkit-box-shadow: -1px 4px 24px 2px rgba(0,0,0,0.39); 
    box-shadow: -1px 4px 24px 2px rgba(0,0,0,0.39);
    border-radius: 5px;
  }
  .post_title {
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 5px; 
  }
  .post_menu {
    float: rigth;
  }
  .buttons_block {
    margin-top: 30px;
  }
  .button {
    margin-right: 10px
  }
</style>