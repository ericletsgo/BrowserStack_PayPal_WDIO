const expectChai = require('chai').expect;

describe('Deep Link', () => {
    it('should let me switch between app and browser', () => {

        var chromePackage = "com.android.chrome";
        var chromeActivity = "com.google.android.apps.chrome.Main";

        var appPackage = driver.getCurrentPackage();
        var appActivity = driver.getCurrentActivity();

        driver.startActivity(chromePackage, chromeActivity);

        driver.waitUntil(
            () => driver.getContexts().length > 1, {
                timeout: 5000,
                timeoutMsg: 'expected WEBVIEW_chrome to become available'
            }
        )
        driver.switchContext('WEBVIEW_chrome');

        driver.url('https://paypal.github.io/react-paypal-js/iframe.html?id=example-venmobutton--horizontal&viewMode=story');

        const frame = $('/html/body/div[3]/div/div/iframe[1]');
        frame.waitForExist({timeout: 5000, timeoutMsg: 'expected iframe to appear'});
        browser.switchToFrame(frame);

        const payPalButton = $('/html/body/div[1]/div/div[1]/div');
        payPalButton.click();

        driver.pause(3000);

        driver.startActivity(appPackage, appActivity);

        var currentActivity = driver.getCurrentActivity();
        expectChai(currentActivity).to.equal(appActivity);
    });
});
