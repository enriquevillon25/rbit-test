const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "es",
    locales: ["es", "ca", "en"],
    fallbackLng: "es",
  },
  localePath: path.resolve("./src/locales"),
  ssg: true, // Set to true for Static Site Generation (SSG)
};
