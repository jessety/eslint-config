'use strict'

module.exports = {
  overrides: [
    {
      files: ["**/*.ts"],
      extends: ['./base.js']
    },
    {
      files: ["**/*.{js,mjs,cjs}"],
      extends: ['./javascript.js'],
      parserOptions: { "sourceType": "script" }
    },
    {
      files: ["**/*.test.{ts,js,cjs,mjs}"],
      env: { "jest": true },
      rules: { "no-console": "warn" }
    }
  ]
};
