<template>
  <section>
    <Resourses v-if="!ISLOGEDIN" />
      <section v-if="POSTS.length > 0  && ISLOGEDIN">
      <PostCard v-for="post in POSTS"
                v-bind:key = 'post.id'
                v-bind:post = 'post'/>
                 <form class="pagination" @click.prevent="changePage">
        <b-pagination
            :total='ALLPOSTS'
            :current.sync="current"
            :range-before="rangeBefore"
            :range-after="rangeAfter"
            :simple="isSimple"
            :rounded="isRounded"
            :per-page="perPage"
            aria-next-label="Next page"
            aria-previous-label="Previous page"
            aria-page-label="Page"
            aria-current-label="Current page"
             tag="button">
        </b-pagination>
    </form> 
     </section>
  </section> 
</template>

<script>
import PostCard from './PostCard';
import Resourses from './Resourses/Resourses'
import {mapGetters, mapActions} from 'vuex';

export default {
  data() {
      return {
        total: 1,
        current: 1,
        perPage: 10,
        rangeBefore: 1,
        rangeAfter: 1,
        isSimple: false,
        isRounded: false,
        prevIcon: 'chevron-left',
        nextIcon: 'chevron-right'
    }
  },
  methods: { changePage() { this.$store.dispatch('GET_POSTS', this.current)}},
  computed: { ...mapGetters(['POSTS','ALLPOSTS','ISLOGEDIN', 'AUTHEDUSER']) },
  components: { PostCard, Resourses  },
  mounted() { this.$store.dispatch('GET_POSTS', this.current); }
};
</script>

<style scoped>
.buttons_block {
  max-width: 60%;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
}
.post_content {
  max-width: 60%;
  margin: 0 auto;
  margin-top: 50px;
  padding: 5%;
  -webkit-box-shadow: -1px 4px 24px 2px rgba(0,0,0,0.39); 
  box-shadow: -1px 4px 24px 2px rgba(0,0,0,0.39);
  border-radius: 5px;
}
.pagination {
  max-width: 50%;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
}

</style>