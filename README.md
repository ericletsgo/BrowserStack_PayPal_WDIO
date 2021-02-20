# PayPal Mobile Tests
This repo includes reference WebdriverIO scripts for interacting with the PayPal purchase buttons on mobile devices. 

For more information on running WDIO tests with Browserstack, please see WDIO's [BrowserStack Service](https://webdriver.io/docs/browserstack-service/) documentation.

Before running any of these scripts, you need to do the following on your environment:
* Ensure you have valid BrowserStack credentials 
* Upload a valid app to use in case #3

## 1. Interacting with elements within an Iframe
This test demonstrates how to interact with elements within an iframe using Webdriver protocols
### Test case
1. Go to a site containing an iframe
2. Switch the driver context into the iframe
3. Interact with the child elements as desired
4. If another window appears, switch to it

### Execution
* Command: `npm run iframe`
* [Example BrowserStack Automate Session](https://automate.browserstack.com/builds/8c4d714a14a9a36b889714fcc3b113187c645308/sessions/6063d015210670ce7b81b528b2945a00f7ef470e?auth_token=2145f1b82d7bc4e663ce347533544d24c734e7554dcfa8d81b1c9973d5b8b4e3)
* Notes:
  * You need to switch between frames. Frame switching is native functionality in WDIO
  * Safari doesn't support cross-domain iframe automation. If using Safari, be sure your domains match. [More information here](http://appium.io/docs/en/advanced-concepts/cross-domain-iframes/)


## 2. Verify international content and languages
This test case routes the site traffic through an international IP address and verifies that your site displays correct international content.
### Test case
1. Go to a site containing geo-specific
2. Switch the driver context into the iframe
3. Interact with the child elements as desired
4. If another window appears, switch to it

### Execution
* Command: `npm run geolocation`
* [Example BrowserStack Automate Session](https://automate.browserstack.com/builds/8c4d714a14a9a36b889714fcc3b113187c645308/sessions/18f869972b69f81fcb186aa1324c5a9925184c22?auth_token=ecc8805826cb0339054318e3f120f85f7883fef051a44f9af5015d7b690049ed)
* Notes
  * You need to set the following capabilities in your config file:
    * browserstack.geoLocation (See more details about BrowserStack's geolocation testing [here](https://www.browserstack.com/ip-geolocation))
    * locale
    * language


## 3. Switch between native apps and the device's browser
These tests demonstrate how to switch between the browser and a native app in order to test deeplink functionality. Because this scenario requires an app to be installed on the device, it runs on BrowserStack's [App Automate](https://app-automate.browserstack.com/) product instead of [Automate](https://automate.browserstack.com/)
### Test case
1. Launch a native app
2. Switch to the browser app
3. Perform the intended steps in the browser
4. Switch back to the native app

### Execution
#### Android
* Command: `npm run deeplink`
* [Example BrowserStack App Automate Session](https://app-automate.browserstack.com/builds/d785d284fb5d0f7bd1a5217a818fe76d9ea9853e/sessions/715b086da24d8353d9985622526bc74519a9127d?auth_token=3efdabc721722978a5c1ab1d0c222631c7759f8a30aea2e03cdf360e850653b6)
* Notes
  * Your native app's package and activity can be retrieved and stored using `.getCurrentPackage()` and `.getCurrentActivity()`
  * Launching apps can take a few seconds - use custom `Waits` to improve stability and speed
  * The assertion at the end uses Chai for custom logic

#### iOS
* Command: `npm run deeplink-ios`
* [Example BrowserStack App Automate Session](https://app-automate.browserstack.com/builds/f39b337c5b3940d31dc281a3a7ecd76f0cf39d90/sessions/ab9d1c0b398516e3abbeb0c56f2c517fcd061b7e?auth_token=ba0c9912fed6ceb7143dce82db861be7ecc3c467a19b94d21e67814e09c8fc91)
* Notes
  * Switch between apps using `.launchApp()` or `.activateApp()` with the bundle ID
  * Interacting with Safari and web elements from the native app context can be slow and/or flaky. Use very specific selectors, waits and retries to improve stability