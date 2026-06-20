// @ts-check

const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({

  testDir: './tests',

  timeout: 60000,

  workers: 1,

  use: {

    headless: false,

    viewport: { width: 1366, height: 768 },

    actionTimeout: 10000,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure'

  }

});