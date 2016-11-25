module.exports = function(config) {
  config.set({

    frameworks: ["mocha", "karma-typescript"],

    files: [
      { pattern: "node_modules/expect.js/index.js" },
      { pattern: "test/src/**/*.ts" },
      { pattern: "src/**/*.ts" }
    ],

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