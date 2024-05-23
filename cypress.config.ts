import { defineConfig } from "cypress";
import registerCodeCoverageTasks from "@cypress/code-coverage/task"

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      registerCodeCoverageTasks(on, config);

      return config;
    },
  },
});
