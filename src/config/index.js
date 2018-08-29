const merge = require('lodash.merge');

const configs = [];

const tryRequire = moduleName => {
  try {
    // Passing the parameter as a string prevents warning
    //  "Critical dependency: the request of a dependency is an expression"
    //  https://github.com/webpack/webpack-dev-server/issues/212
    configs.push(require(`${moduleName}`));
  } catch (err) {
    // Ignore MODULE_NOT_FOUND, just means file doesn't exist
    // if (err instanceof Error) {
    //   if (err.message.match(/Cannot find module/)) return;
    //   if (err.code && err.code === 'MODULE_NOT_FOUND') return;
    // }
    // throw err;
    return;
  }
};

tryRequire('./default');
tryRequire(`./${process.env.NODE_ENV}`);

const config = merge(...configs);
const has = key => config.hasOwnProperty(key);
const get = key => {
  if (!has(key)) throw new Error('Unknown Config Key', key);
  return config[key];
};

module.exports = {
  get,
  has
};
