exports.config = {
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,

  updateJob: false,
  specs: [
    './examples/run-first-test/specs/first_test.js'
  ],
  exclude: [],

  capabilities: [{
    project: "PayPal SDK",
    build: 'PayPal Deep Linking',
    device: 'Google Pixel 3',
    os_version: "9.0",
    app: process.env.BROWSERSTACK_APP_ID || 'bs://<hashed app-id>'
  }],

  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 60*1000,
  connectionRetryTimeout: 90*1000,
  connectionRetryCount: 3,

  logLevels: {
    '@wdio/browserstack-service': 'info'
  },

  services: ['browserstack'],

  framework: 'mocha',

  mochaOpts: {
    ui: 'bdd',
    timeout: 60*1000
  },

};
