const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './'
});

/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest',
  coverageProvider: 'v8',
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!<rootDir>/dist/**',
    '!<rootDir>/__MOCKS__/**',
    '!<rootDir>/.husky/**',
    '!<rootDir>/.idea/**',
    '!<rootDir>/.next/**',
    '!<rootDir>/.swc/**',
    '!<rootDir>/.vscode/**',
    '!<rootDir>/.storybook/**',
    '!<rootDir>/stories/**',
    '!<rootDir>/*.config.{js,ts}',
    '!<rootDir>/**/*.stories.{js,ts,tsx,jsx,mdx}',
    '!<rootDir>/**/*.types.{js,ts,tsx,jsx,mdx}',
    '!<rootDir>/**/index.ts',
    '!<rootDir>/.lintstagedrc.js',
    '!<rootDir>/coverage/**',
    '!<rootDir>/src/icons/**',
    '!<rootDir>/src/theme/**',
    '!<rootDir>/src/utils/test/**'
  ],
  moduleNameMapper: {
    '^@/(.+)$': '<rootDir>/src/$1'
  }
};

module.exports = createJestConfig(config);
