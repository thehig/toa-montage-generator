module.exports = function(wallaby) {
  // Babel, jest-cli and some other modules may be located under
  // react-scripts/node_modules, so need to let node.js know about it
  var path = require('path');
  process.env.NODE_PATH +=
    path.delimiter +
    path.join(__dirname, 'node_modules') +
    path.delimiter +
    path.join(__dirname, 'node_modules/react-scripts/node_modules');
  require('module').Module._initPaths();

  var babelCompiler = wallaby.compilers.babel({
    babel: require('babel-core'),
    presets: ['react-app']
  });

  return {
    files: [
      'src/**/*.+(js|jsx|json|snap|css|less|sass|scss|jpg|jpeg|gif|png|svg)',
      '.storybook/**/*.js',
      '!src/**/*.spec.js?(x)'
    ],

    compilers: {
      'src/**/*.js?(x)': babelCompiler,
      // 'dot' folders are not included by the above
      '.storybook/**/*.js?(x)': babelCompiler
    },

    filesWithNoCoverageCalculated: [
      'node_modules/**/*.*',
      '.storybook/**/*.js',
      'src/**/*.stories*.js',
      'src/**/stories.js',

      'src/**/*.spec*.js',
      'src/spec/**/*.*',

      'src/registerServiceWorker.js',
      'src/logic/cli.js'
    ],

    tests: ['src/**/*.spec.js?(x)'],

    env: {
      type: 'node',
      runner: 'node'
    },

    setup: wallaby => {
      const jestConfig = require('react-scripts/scripts/utils/createJestConfig')(p =>
        require.resolve('react-scripts/' + p)
      );
      Object.keys(jestConfig.transform || {}).forEach(
        k => ~k.indexOf('^.+\\.(js|jsx') && void delete jestConfig.transform[k]
      );
      delete jestConfig.testEnvironment;
      wallaby.testFramework.configure(jestConfig);
    },

    testFramework: 'jest'
  };
};
