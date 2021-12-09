const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8')
);

module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier', 'eslint-plugin-tsdoc'],
  ignorePatterns: ['dist', '.eslintrc.js'],
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'tsdoc/syntax': 'warn',
  },
  overrides: [
    {
      files: ['**/*.ts'],
      rules: { 'prettier/prettier': ['error', prettierOptions] },
    },
  ],
};
