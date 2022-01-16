'use strict';

require(`./patch`);

module.exports = {
  extends: [
    './base.js',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
};
