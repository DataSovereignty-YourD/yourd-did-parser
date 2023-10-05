module.exports = {
  preset: 'ts-jest',
  moduleFileExtensions: ['js', 'mjs', 'jsx', 'ts', 'tsx'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.(js|mjs|jsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  testRegex: '\\.test\\.(js|mjs|jsx|ts|tsx)$',
  collectCoverageFrom: [
    'package/**/*.{js,mjs,jsx,ts,tsx}',
    '!package/**/*.d.ts',
    '!package/__tests__/**/*.*',
    '!**/node_modules/**'
  ],
  transformIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/package/$1'
  }
}
