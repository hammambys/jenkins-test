import { defineConfig } from 'cypress';

export default defineConfig({
  //
  video: false,
  //
  screenshotsFolder: 'cypress/reports/mochareports/assets',
  //
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    embeddedScreenshots: true,
    reporterEnabled: 'mochawesome',
    mochawesomeReporterOptions: {
      reportDir: 'cypress/reports/mocha',
      screenshotOnRunFailure: true,
      quite: true,
      overwrite: false,
      html: false,
      json: true,
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
