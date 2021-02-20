exports.config = {
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,

  updateJob: false,
  specs: [
    './specs/deeplink-ios.js'
  ],
  exclude: [],

  commonCapabilities: {
    build: 'Mobile Device Test Examples',
    project: "PayPal SDK",
    autoDismissAlerts: true,
  },

  capabilities: [
      { 
        os_version: "14",
        device: "iPhone 12",
        app: process.env.BROWSERSTACK_IOS_APP_ID
      },
  ],

  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10*1000,
  connectionRetryTimeout: 90*1000,
  connectionRetryCount: 3,

  logLevels: {
    '@wdio/browserstack-service': 'info'
  },

  services: ['browserstack'],

  framework: 'mocha',

  mochaOpts: {
    ui: 'bdd',
    timeout: 180*1000
  },
};

exports.config.capabilities.forEach(function(caps){
  for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
