const jestConfigurator = require("@times-components/jest-configurator");

module.exports = Object.assign(jestConfigurator("link", "android"), {
  collectCoverageFrom: [
    "**/packages/link/*.js",
    "!**/packages/link/*.web.js",
    "!**/packages/link/*.stories.js"
  ]
});
