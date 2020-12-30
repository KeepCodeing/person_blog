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

const Record = {
  path: '/records',
  component: () => import('views/record/Record')
};

const routes = [
  defaultPage,
  Home,
  Record,
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
