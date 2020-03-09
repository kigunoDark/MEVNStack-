import axios from 'axios';
export default {
  actions : {
    REGISTER_USER: async(context, newUser) => {
      const url = 'http://localhost:4000/auth/signup';
      await axios.post(url, newUser);
    },
    USER_LOGIN: async(context, data) => {
      context.commit('AUTH_REQUEST');
      const {email, password} = data;
      const url = 'http://localhost:4000/auth/login';
      await axios.post(url, {email, password})
      .then(response => {
        const token = response.data.token;
        const user = response.data.user;
        localStorage.setItem('token', token)
        localStorage.setItem('user', user._id)
        axios.defaults.headers.common['auth-token'] = token;
        console.log(user)
        context.commit('AUTH_SUCCESS', {token, user: user._id});
        console.log('Success')
      })
      .catch(err => {
        context.commit('AUTH_ERROR')
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        console.log(err)
      });
    },
    LOGOUT: (context) => {
      context.commit('LOGOUT');
      localStorage.removeItem('token');
      delete axios.defaults.headers.common['auth-token']
      console.log('LOGED OUT')
    }
  },
  mutations: {
    AUTH_REQUEST(state) {
      state.status = 'loading'
    },
    AUTH_SUCCESS(state, data) {
      state.status = 'success'
      state.token = data.token
      state.user = data.user
    },
    AUTH_ERROR(state) {
      state.status = 'error'
    },
    LOGOUT(state) {
      state.status = '',
      state.token = ''
    }

  },

  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: localStorage.getItem('user') || {}
  },
  getters: {
    ISLOGEDIN: (state) => { return !!state.token; },
    AUTHSTATUS: (state) => {  return state.status; },
    AUTHEDUSER: (state) => { return state.user }
  }
}