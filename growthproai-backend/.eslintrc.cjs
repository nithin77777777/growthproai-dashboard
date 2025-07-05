module.exports = {
  env: { node: true, browser: false, es2022: true },
  extends: ['eslint:recommended'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  rules: { 'no-console': 'off' }
};
