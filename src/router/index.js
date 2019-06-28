import Vue from 'vue';
import Router from 'vue-router';
import NotFound from '@/components/NotFound';
import helper from '@/utils/helper';

Vue.use(Router);

const routes = helper.getPagesComp();

// 404
routes.push({
  path: '*',
  name: 'NotFound',
  component: NotFound
});

export default new Router({
  routes,
});
