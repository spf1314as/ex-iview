// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/strongly-recommended',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    "eslint:recommended"
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
    'html'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': 0,
    'no-unused-vars': ['error', {var: 'all', args: 'none'}],
    "linebreak-style": "off",
    "vue/require-default-prop": "off",
    "vue/order-in-components": 'warn',
    'vue/no-parsing-error': ['off' , {
      "x-invalid-end-tag": false
    }],
    "quotes": ["error", "single"],
    "semi": ["error", "never"],
    "indent": ['error', 2,{ "VariableDeclarator": 2 ,"SwitchCase": 1,"outerIIFEBody": 2}]
  }
}
