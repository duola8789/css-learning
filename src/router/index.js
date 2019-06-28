import Vue from 'vue';
import Router from 'vue-router';
import NotFound from '@/components/NotFound';

Vue.use(Router);

// 创建自己的（模块）上下文
const requireComponent = require.context('../pages/', true, /\w*\.vue$/);

const routes = requireComponent.keys().map(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName);

  // 剥去文件名开头的 `./` 和结尾的扩展名
  const componentName = fileName.replace(/^\.\/(\w*)\.\w+$/, '$1');

  // 全局注册组件
  const component = Vue.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default || componentConfig
  );

  return {
    path: `/${componentName}`,
    name: componentName,
    component,
    /**
     * 动态加载路由
     * 需要babel的设置，babel@6需要插件babel-plugin-syntax-dynamic-import， babel@7@babel/plugin-syntax-dynamic-import
     * 同时为了防止eslint报错：Parsing error: Unexpected token import，需要使用babel-eslint
     * https://stackoverflow.com/questions/47815775/dynamic-imports-for-code-splitting-cause-eslint-parsing-error-import
     */
    // component: () => import('@/components/demos/demo1.vue')
  };
});

// 404
routes.push({
  path: '*',
  name: 'NotFound',
  component: NotFound
});

export default new Router({
  routes,
});
