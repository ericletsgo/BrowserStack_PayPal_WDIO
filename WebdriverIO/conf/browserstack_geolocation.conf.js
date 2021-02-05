exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'ericwang12',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'MVztxmZaCjR51Sygtmhp',

  updateJob: false,
  specs: [
    './test/specs/geolocation.js'
  ],
  exclude: [],

  capabilities: [{
    browser: 'Chrome',
    geoLocation: 'SE',
    name: 'Geolocation - Sweden',
    build: 'PayPal'
  }],

  // var capabilities = {
  //   "os_version" : "14",
  //   "device" : "iPhone 12",
  //   "real_mobile" : "true",
  //   "browserstack.local" : "false",
  //   "browserstack.user" : "ericwang12",
  //   "browserstack.key" : "MVztxmZaCjR51Sygtmhp",
  //   "browserName" : "iPhone"
  //   }

  logLevel: 'warn',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  host: 'hub.browserstack.com',

  // before: function () {
  //   var chai = require('chai');
  //   global.expect = chai.expect;
  //   chai.Should();
  // },
  // framework: 'mocha',
  // mochaOpts: {
  //   ui: 'bdd',
  //   timeout: 60000
  // },

  // Code to mark the status of test on BrowserStack based on the assertion status
  afterTest: function (test, context, { error, result, duration, passed, retries }) {
    if(passed) {
      browser.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "Assertions passed"}}');
    } else {
      browser.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "At least 1 assertion failed"}}');
    }
  }
}
