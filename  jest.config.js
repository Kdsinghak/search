import {defaults as tsjPreset} from 'ts-jest/presets';

export default {
  ...tsjPreset,
  preset: 'react-native',
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  //   moduleNameMapper: {
  //     '^@/(.*)$': '<rootDir>/$1',
  //     '^~/(.*)$': '<rootDir>/$1',
  //     '\\.svg': '<rootDir>/__mocks__/svgMock.js',
  //     '@react-navigation': '<rootDir>/__mocks__/@react-navigation.js',
  //   },
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  transformIgnorePatterns: [
    // '<rootDir>/node_modules/(react-clone-referenced-element|@react-native-community|react-navigation|@react-navigation/.*|@unimodules/.*|native-base|react-native-code-push)',
    'node_modules/(?!(react-native)/)',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '\\.snap$',
    'react-native',
  ],

  //   cacheDirectory: '.jest/cache',
  testEnvironment: 'jsdom',
  //   setupFiles: ['<rootDir>/__mocks__/mock-setup.js'],
};
