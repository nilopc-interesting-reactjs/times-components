const path = require("path");

const config = {
  snapPath: path.join(__dirname, "/snappy"),
  automationName: "XCUITest",
  platformName: "iOS",
  deviceName: "iPhone 7",
  platformVersion: "11.1",
  app: path.join(
    __dirname,
    "../ios/build/Build/Products/Debug-iphonesimulator/storybooknative.app"
  ),
  ignoredStories: [
    "Advertisement",
    "AuthorHeadTracking",
    "AuthorProfileTracking",
    "Brightcove",
    "PaginationTracking",
    "Provider",
    "TrackingPage",
    "TrackingEvent",
    "Error",
    "error",
    "AuthorProfileLoading"
  ]
};

module.exports = config;
