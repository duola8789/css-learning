/**
 * Created By zh on 2019-06-28
 */
import Vue from 'vue';

export default {
  // 获取 pages 目录下的组件的相关信息
  getPagesComp() {
    // 创建自己的（模块）上下文
    const requireComponent = require.context('@/pages/', true, /\w*\.vue$/);

    return requireComponent.keys().sort((a, b) => {
      // 根据 createdAt 属性排序
      const aComp = requireComponent(a).default || requireComponent(a);
      const bComp = requireComponent(b).default || requireComponent(a);

      const aTime = new Date(aComp.createdAt).valueOf();
      const bTime = new Date(bComp.createdAt).valueOf();

      if (!aTime || !bTime) {
        throw new Error('新建组件应当添加createdAt属性');
      }

      return aTime - bTime;
    }).map(fileName => {

      // 获取组件配置
      const componentConfig = requireComponent(fileName);

      // 剥去文件名开头的 `./` 和结尾的扩展名
      const componentName = fileName.replace(/^\.\/(\w*)\.\w+$/, '$1').toLowerCase();

      // 全局注册组件
      const component = Vue.component(
        componentName,
        // 如果这个组件选项是通过 `export default` 导出的，
        // 那么就会优先使用 `.default`，
        // 否则回退到使用模块的根。
        componentConfig.default || componentConfig
      );

      // 获取组件描述
      const { title = '默认组件' } = componentConfig.default || componentConfig;

      return {
        path: `/${componentName}`,
        name: componentName,
        component,
        title
      };
    });

  }
};
