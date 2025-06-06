const { createDefaultPreset } = require('ts-jest');

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    ...tsJestTransformCfg,
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['**/test/**/*.test.+(ts|tsx|js)'],
};
