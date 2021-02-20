const expectChai = require('chai').expect;

describe('iOS Deep Link', () => {
    it('should let me switch between app and Safari', () => {

        const safariBundleId = "com.apple.mobilesafari";
        const nativeAppBundleId = "com.browserstack.Sample-iOS"; // replace this with your app's bundle id
        const paypalUrl = "https://paypal.github.io/react-paypal-js/iframe.html?id=example-venmobutton--horizontal&viewMode=story";

        // Launch Safari and load PayPal URL
        driver.execute('mobile: launchApp', {bundleId: safariBundleId});
        const search = $("//*[@value='Search or enter website name']");
        search.setValue(paypalUrl + '\n');

        // Find and click the Venmo button
        const venmoButtonSelector = `type == 'XCUIElementTypeButton' && name CONTAINS 'venmo'`
        const venmoButton = $(`-ios predicate string:${venmoButtonSelector}`)
        venmoButton.click();
        driver.waitUntil(
            () => venmoButton.isClickable() ? venmo.click() : true
         );

        // Perform the rest of your test in the native app
        driver.pause(5000);
        driver.execute('mobile: launchApp', {bundleId: nativeAppBundleId});
    });
});
