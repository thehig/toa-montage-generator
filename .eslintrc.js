module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
    "jest/globals": true
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      impliedStrict: true,
      experimentalObjectRestSpread: true,
      arrowFunctions: true
    },
    sourceType: "module"
  },
  plugins: ["react", "jsx-a11y", "jest"],
  rules: {
    "no-console": "warn",
    "react/display-name": "off", // Causes annoyances with JSX inside higher order components
    indent: ["error", 2, { "SwitchCase": 1 }],
    "linebreak-style": 0,
    semi: ["error", "always"],
    "react/no-unescaped-entities": 0,
    "react/prop-types": "warn"
  }
};
