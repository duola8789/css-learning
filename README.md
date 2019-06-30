# CSS Learning

## 说明

CSS练习项目，每天练一练。前期按照[CSS Tricks](https://lhammer.cn/You-need-to-know-css/#/)进行练习。

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

## 路由

在`router/index.js`中配置了路由，`pages`目录下每个组件的名称为路由的地址，每个组件的`title`属性为导航栏的文字。
