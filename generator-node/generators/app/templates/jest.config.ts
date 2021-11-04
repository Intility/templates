
import { Config } from '@jest/types';

// Jest configuration documentation: https://jestjs.io/docs/configuration

const config: Config.InitialOptions = {
  // Module config
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
    // Skipping auto generated folders
    '<rootDir>/node_modules',
    '<rootDir>/build',
    '<rootDir>/coverage',
    '<rootDir>/reports',
    '<rootDir>/assets',
    // Skipping configuration files and folders.
    '<rootDir>/src/index.ts',
    '<rootDir>/src/config',
    '<rootDir>/src/static',
    '<rootDir>/src/utils/mocks',
    '<rootDir>/jest.config.ts',
    // Skipping types
    '<rootDir>/src/interfaces',
    '.dto.ts',
    '.entity.ts',
    // Skipping test utils
    '<rootDir>/src/utils/test'
  ],
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/build/',
    '<rootDir>/jest.config.ts',
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
