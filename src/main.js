import Vue from 'vue'
import store from './store';
import App from './App.vue'
import axios from 'axios';
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios';
import Buefy from 'buefy';
import routes from './router';
import 'buefy/dist/buefy.css';
Vue.use(Buefy);
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const router = new VueRouter({mode:'history', routes})
const token = localStorage.getItem('token');
const userid = localStorage.getItem('user');

if (token) {
  Vue.prototype.$http.defaults.headers.common['auth-token'] = token
  Vue.prototype.$http.defaults.headers.common['user'] = userid
}
Vue.config.productionTip = false
new Vue({
  store, 
  router,
  render: h => h(App),
}).$mount('#app');