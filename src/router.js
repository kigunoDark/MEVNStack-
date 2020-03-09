import IndexComponent from './components/IndexComponent.vue';
import CreateComponent from './components/CreateComponent.vue';
import EditComponent from './components/EditComponent.vue';
import LoginComponent from './components/LoginComponent.vue';
import RegisterComponent from './components/RegisterComponent.vue';

const routes = [
  {
    name: 'create',
    path: '/create',
    component: CreateComponent
  },
  {
    name: 'posts',
    path: '/',
    component: IndexComponent
  },
  {
    name: 'edit',
    path: '/edit/:id',
    component: EditComponent
  },
  {
    name: 'delete',
    path: '/delete/:id',
    component: IndexComponent
  },
  {
    name: 'login',
    path: '/login',
    component:  LoginComponent
  },
  {
    name: 'signup',
    path: '/signup',
    component: RegisterComponent
  }
]


export default routes;