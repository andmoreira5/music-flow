import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    experimentalRunAllSpecs: true,
    baseUrl: "http://localhost:5173/",
    supportFile: "cypress/support/e2e.js",
  },
});
