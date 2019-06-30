/**
 * Created by zh on 2019/6/30.
 */
import Vue from 'vue';
import { Radio, Card } from 'element-ui';

[Radio, Card].forEach(comp => {
  Vue.component(comp.name, comp);
});

export default Vue;
