const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de", "id", "ar", "pt", "zh"],
    fallbackLng: "en",
  },
  localePath: path.resolve("./public/locales"),
  ssg: true, // Set to true for Static Site Generation (SSG)
};
