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
      files: [
        '**/*.{test,spec}.ts',
        '**/__fixtures__/**/*.ts',
        '**/__tests__/**/*.ts',
      ],
      extends: ['./base.js'],
      env: { jest: true },
      rules: {
        'no-console': 'warn',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-empty-function ': 'off',
      },
    },
    {
      files: [
        '**/*.{test,spec}.{js,cjs,mjs}',
        '**/__fixtures__/**/*.{js,cjs,mjs}',
        '**/__tests__/**/*.{js,cjs,mjs}',
      ],
      extends: ['./javascript.js'],
      env: { jest: true },
      rules: {
        'no-console': 'warn',
      },
    },
  ],
};
