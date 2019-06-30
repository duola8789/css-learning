import Vue from '@/utils/element';

import App from './App.vue';
import router from '@/router/index';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  eventBus: new Vue(),
}).$mount('#app');
