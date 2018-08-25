module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    'jest/globals': true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
    'prettier/standard'
  ],
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      impliedStrict: true,
      experimentalObjectRestSpread: true,
      arrowFunctions: true
    },
    sourceType: 'module'
  },
  plugins: ['react', 'jsx-a11y', 'jest', 'prettier'],
  globals: {
    process: true
  },
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'warn',
    'react/display-name': 'off', // Causes annoyances with JSX inside higher order components
    'linebreak-style': 0,
    'react/no-unescaped-entities': 0,
    'react/prop-types': 'warn'
  }
};
