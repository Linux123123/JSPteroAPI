const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8')
);

/** @type {import("@types/eslint").Linter.Config} */
module.exports = {
  env: {
    es2022: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'prettier', 'eslint-plugin-tsdoc'],
  ignorePatterns: ['dist', '.eslintrc.js'],
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'tsdoc/syntax': 'warn'
  },
  overrides: [
    {
      files: ['**/*.ts'],
      rules: { 'prettier/prettier': ['error', prettierOptions] }
    }
  ]
};
