/**
 * Created by zh on 2019/6/30.
 */
import Vue from 'vue';
import { Input } from 'element-ui';

[Input].forEach(comp => {
  Vue.component(comp.name, comp);
});

export default Vue;
