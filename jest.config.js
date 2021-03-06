const coverageReporters = process.env.SEND_REPORT_COVERALLS
  ? ['text-lcov', 'text'] : ['text', 'html'];

module.exports = {
  setupFilesAfterEnv: [
    '@testing-library/react/cleanup-after-each',
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
  coverageReporters,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/__mocks__/fileMock.js'
  },
};
