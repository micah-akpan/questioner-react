module.exports = {
  setupFilesAfterEnv: [
    'react-testing-library/cleanup-after-each',
    './src/setupTests.js'
  ],
  errorOnDeprecated: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/*.config.js',
    '!build/**',
    '!coverage/**'
  ],
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],
  coverageReporters: ['text', 'text-lcov']
};
