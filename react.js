'use strict';

require(`./patch`);

module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['./base.js'],
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'import'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 11,
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
};
