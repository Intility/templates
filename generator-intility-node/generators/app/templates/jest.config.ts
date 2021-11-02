
import { Config } from '@jest/types';

// Jest configuration documentation: https://jestjs.io/docs/configuration

const config: Config.InitialOptions = {
  // Module config
  //
  moduleFileExtensions: [ 'js', 'json', 'ts' ],
  modulePathIgnorePatterns: [ '<rootDir>/build/' ],
  rootDir: '.',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest'
  },

  // Coverage config
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '**/*.(t|j)s'
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/build',
    '<rootDir>/src/index.ts',
    '<rootDir>/src/config',
    '<rootDir>/src/static',
    '<rootDir>/src/interfaces'
  ],
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/build/'
  ],
  setupFiles: [ 'dotenv/config' ],
  reporters: [
    'default',
    [ 'jest-junit',
      {
        suiteName: 'Jest tests',
        uniqueOutputName: 'false',
        classNameTemplate: '{classname}-{title}',
        titleTemplate: '{classname}-{title}',
        ancestorSeparator: ' › ',
        usePathForSuiteName: 'true',
        outputDirectory: 'reports',
        outputName: 'junit_report.xml'
      }
    ]
  ],
  verbose: true
};

export default config;
