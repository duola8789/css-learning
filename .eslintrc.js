module.exports = {
  "root": true,
  "env": {
    "node": true
  },
  "extends": [
    "plugin:vue/essential",
    "eslint:recommended"
  ],
  "parserOptions": {
    "parser": "babel-eslint"
  },
  "rules": {
    // 禁止不写分号
    "semi": 2,
    // 一行长度不应该超过120个字符
    "max-len": [2, 120]
  }
};
