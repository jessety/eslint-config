'use strict';

describe('Exports', () => {
  test('default configuration', () => {
    expect(() => require('..')).not.toThrow();
  });

  test('base configuration', () => {
    expect(() => require('../base')).not.toThrow();
  });

  test('strict configuration', () => {
    expect(() => require('../strict')).not.toThrow();
  });

  test('javascript configuration', () => {
    expect(() => require('../javascript')).not.toThrow();
  });
});
