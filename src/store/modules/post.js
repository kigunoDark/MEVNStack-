import axios from 'axios';
export default {
  actions: {
    GET_POSTS: async (context, page) => {
      const url = `http://localhost:4000/posts/?page=${page}`;
      const {data} = await axios.get(url);
      context.commit('SET_POSTS', data)
    },
    GET_POST: async(context, id) => {
      const url = `http://localhost:4000/posts/edit/${id}`;
      const {data} = await axios.get(url);
      context.commit('SET_POST', data);
    },
    UPDATE_POST: async(context, data) => {
      const url = `http://localhost:4000/posts/update/${data.id}`;
      await axios.put(url, data.post);
    },
    SAVE_POST: async(context, newPost) => {
      const url = 'http://localhost:4000/posts/add';
      await axios.post(url, newPost);
      context.commit('ADD_POST', newPost);
    },

    ADD_CLAPS: async(context, data) => {
      const claps = data.claps+1;
      const url = `http://localhost:4000/posts/clap`;
      const updatedPost = await axios.put(url, {id: data.id, claps});
      context.commit('SET_CLAPS', updatedPost)
    },
    DELETE_POST: async (context, id) => {
      console.log(id)
      context.commit('DELETE_POST', id);
    }
  },
  mutations: {
    SET_POSTS: (state, data) => {
      state.posts = data.posts;
      state.pagesNum = data.pagesNum
    },
    SET_POST: (state, data) => { state.post = data; },
    ADD_POST: (state, newPost) => { state.posts.push(newPost); },
    SET_CLAPS: (state, updatedPost) => { 
     state.posts.find(p => p._id === updatedPost.data._id).claps = updatedPost.data.claps+1
    },
  },
  state: {
    posts: [],
    pagesNum: 1,
    post: {}
  },
  getters: {
    POSTS: (state) => { return state.posts; },
    POST: (state) => { return state.post; },
    ALLPOSTS: (state) => { return state.pagesNum; }
  },
}