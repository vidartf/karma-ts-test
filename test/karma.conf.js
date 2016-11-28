module.exports = function(config) {
  var configuration = {
    basePath: '..',
    frameworks: ["mocha", "karma-typescript"],

    files: [
      { pattern: "node_modules/expect.js/index.js" },
      { pattern: "test/src/**/*.ts" },
      { pattern: "src/**/*.ts" }
    ],
    colors: true,
    singleRun: true,
    logLevel: config.LOG_INFO,

    preprocessors: {
      "**/*.ts": ["karma-typescript"]
    },

    reporters: ["progress", "karma-typescript"],

    browsers: ["Chrome"],

    karmaTypescriptConfig: {
      tsconfig: "test/src/tsconfig.json"
    }
  }
  if (process.env.TRAVIS) {
      configuration.browsers = ['Firefox'];
  }
  config.set(configuration);
};
