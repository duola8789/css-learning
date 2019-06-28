module.exports = {
  'root': true,
  'env': {
    'node': true
  },
  'extends': [
    'eslint-config-alloy/vue',
  ],
  globals: {
    // 这里填入你的项目需要的全局变量
    // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
    //
    // Vue: false
  },
  'parserOptions': {
    'parser': 'babel-eslint'
  },
  'rules': {
    // // 禁止不写分号
    // "semi": 2,
    // // 一行长度不应该超过120个字符
    // "max-len": [2, 120],
    'no-console': 0,
    'no-debug': 0,
    // 缩进
    'indent': [2, 2, {
      // 强制 switch 语句中的 case 子句的缩进级别
      'SwitchCase': 1,
      // 要求三元表达式内的三元表达式不能有缩进
      'flatTernaryExpressions': true,
    }],
    'vue/html-indent': [2, 2],
    'vue/script-indent': [2, 2]
  }
};
