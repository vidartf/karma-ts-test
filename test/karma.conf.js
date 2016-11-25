module.exports = function(config) {
  config.set({
    basePath: '..',
    frameworks: ["mocha", "karma-typescript"],

    files: [
      { pattern: "node_modules/expect.js/index.js" },
      { pattern: "test/src/**/*.ts" },
      { pattern: "src/**/*.ts" }
    ],
    colors: true,
    singleRun: true,
    logLevel: config.LOG_DEBUG,

    preprocessors: {
      "**/*.ts": ["karma-typescript"]
    },

    reporters: ["progress", "karma-typescript"],

    browsers: ["Chrome"],

    karmaTypescriptConfig: {
      tsconfig: "./tsconfig.json"
    }
  });
};