# My-Create-Vue-App

## 说明

Vue项目脚手架，由Vue-cli 3创建而来。

已配置功能：

1. Vue-Router
2. [AlloyTeam ESLint 规则](https://github.com/AlloyTeam/eslint-config-alloy#vue)
3. Pre-Commit检查
4. 自动注册`./src/pages`目录下的组件到路由，未匹配路径匹配NotFound组件
5. Reset CSS

## 命令

```BASH
# 安装
yarn install

# 本地开发
yarn run start

# 构建
yarn run build

# 单元测试
yarn run test

# 代码检查并修复
yarn run lint
```

## 构建选项

```bash
--mode        指定环境模式 (默认值：production)
--dest        指定输出目录 (默认值：dist)
--modern      面向现代浏览器不带自动回退地构建应用
--target      app | lib | wc | wc-async (默认值：app)
--name        库或 Web Components 模式下的名字 (默认值：package.json 中的 "name" 字段或入口文件名)
--no-clean    在构建项目之前不清除目标目录
--report      生成 report.html 以帮助分析包内容
--report-json 生成 report.json 以帮助分析包内容
--watch       监听文件变化
```
