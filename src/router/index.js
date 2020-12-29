import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const defaultPage = {
  redirect: '/home',
  path: '',
};

const Home = {
  path: '/home',
  component: () => import('views/home/Home')
};

const Message = {
  path: '/message',
  component: () => import('views/message/Message')
};


const routes = [
  defaultPage,
  Home,
  Message
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router
