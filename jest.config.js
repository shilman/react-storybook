module.exports = {
  cacheDirectory: '.cache/jest',
  clearMocks: true,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
  },
  projects: ['<rootDir>/packages/*', '<rootDir>/examples/*'],
  collectCoverage: false,
  collectCoverageFrom: ['packages/**/*.{js,jsx}', '!**/generators/**'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupTestFrameworkScriptFile: './node_modules/jest-enzyme/lib/index.js',
};
