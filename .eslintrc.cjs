/* eslint-env node */
module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  rules: {
    // 如果组件名称为 index，ESLint 就会忽略此次组件名称的检查
    'vue/multi-word-component-names': [
        'warn',
        {
            // 指定需要忽略的组件名称
            ignores: ['index']
        },
        {
          "vue/multi-word-component-names": "off"
        }
    ]
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}