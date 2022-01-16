'use strict';

module.exports = {
  overrides: [
    {
      files: ['**/*.ts'],
      extends: ['./base.js'],
    },
    {
      files: ['**/*.{js,mjs,cjs}'],
      extends: ['./javascript.js'],
    },
    {
      files: ['**/*.{test,spec}.ts'],
      extends: ['./base.js'],
      env: { jest: true },
      rules: {
        'no-console': 'warn',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
      },
    },
    {
      files: ['**/*.{test,spec}.{js,cjs,mjs}'],
      extends: ['./javascript.js'],
      env: { jest: true },
      rules: {
        'no-console': 'warn',
      },
    },
  ],
};
