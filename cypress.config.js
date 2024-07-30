const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    username: "cd@gmail.com",
    password: "222",
  },
  e2e: {
    baseUrl: "https://coe-webstore.tdlbox.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
