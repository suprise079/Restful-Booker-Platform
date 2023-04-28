const { defineConfig } = require("cypress");
const xlsx = require("node-xlsx").default;
const fs = require("fs"); // for file
const path = require("path"); // for file path

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://automationintesting.online/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        parseXlsx({ filePath }) {
          return new Promise((resolve, reject) => {
            try {
              const jsonData = xlsx.parse(fs.readFileSync(filePath));
              resolve(jsonData);
            } catch (e) {
              reject(e);
            }
          });
        },
      });
    },
  },
  projectId: "wbjwwe",
  reporter: "mochawesome",
});
