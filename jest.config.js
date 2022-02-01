const { defaults } = require('jest-config');
module.exports = {
  testEnvironment: 'jest-environment-jsDom',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  // ...
};
