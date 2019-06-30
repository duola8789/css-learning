import Vue from '@/utils/element';

import 'prismjs';
import 'prismjs/themes/prism.css';
import Prism from 'vue-prism-component';

import App from './App.vue';
import router from '@/router/index';

Vue.config.productionTip = false;

// 全局注册 prism
Vue.component('prism', Prism);

new Vue({
  render: h => h(App),
  router,
  eventBus: new Vue(),
}).$mount('#app');
