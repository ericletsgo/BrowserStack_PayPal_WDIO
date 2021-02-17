exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'ericwang12',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'MVztxmZaCjR51Sygtmhp',

  updateJob: false,
  specs: [
    './specs/iframe.js'
  ],
  exclude: [],

  commonCapabilities: {
    'build': 'PayPal'
  },

  capabilities: [
      { 
        browserName: 'android', 
        os_version : "10.0", 
        device : "Samsung Galaxy S20", 
        real_mobile : "true",
      },
  ],

  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 60000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  host: 'hub.browserstack.com',

  logLevels: {
    webdriver: 'info',
    '@wdio/browserstack-service': 'info'
  },

  services: ['browserstack'],

  framework: 'mocha',

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },

  // Code to mark the status of test on BrowserStack based on the assertion status
  // afterTest: function (test, context, { error, result, duration, passed, retries }) {
  //   if(passed) {
  //     browser.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "Assertions passed"}}');
  //   } else {
  //     browser.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "At least 1 assertion failed"}}');
  //   }
  // }
}

exports.config.capabilities.forEach(function(caps){
  for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
