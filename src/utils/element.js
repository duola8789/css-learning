/**
 * Created by zh on 2019/6/30.
 */
import Vue from 'vue';
import { Radio, Card, Switch } from 'element-ui';

[Radio, Card, Switch].forEach(comp => {
  Vue.component(comp.name, comp);
});

export default Vue;
