exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || '<USERNAME>',
  key: process.env.BROWSERSTACK_ACCESS_KEY || '<ACCESS KEY>',

  updateJob: false,
  specs: [
    './specs/geolocation.js'
  ],
  exclude: [],

  commonCapabilities: {
    'build': 'Mobile Device Test Examples',
    'project': "PayPal SDK",
    'browserstack.geoLocation': 'DE',
    'locale': 'de',
    'language': 'de',
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
  waitforTimeout: 10000,
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
}

exports.config.capabilities.forEach(function(caps){
  for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
