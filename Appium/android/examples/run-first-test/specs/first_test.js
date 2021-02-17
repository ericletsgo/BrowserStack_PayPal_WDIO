const expectChai = require('chai').expect;

// describe('Deep Link', () => {
//     it('can switch between app and browser', async () => {

//         var chromePackage = "com.android.chrome";
//         var chromeActivity = "com.google.android.apps.chrome.Main";

//         var appPackage = await driver.getCurrentPackage();
//         var appActivity = await driver.getCurrentActivity();

//         await driver.startActivity(chromePackage, chromeActivity);
//         // await driver.pause(5000);
//         // var contexts = await driver.getContexts();
//         await driver.waitUntil(
//             () => driver.getContexts().length > 1,
//             {
//                 timeout: 5000,
//                 timeoutMsg: 'expected WEBVIEW_chrome to become available'
//             }
//         )

//         await driver.switchContext('WEBVIEW_chrome');

//         await driver.url('https://paypal.github.io/react-paypal-js/iframe.html?id=example-venmobutton--horizontal&viewMode=story');

//         // await driver.pause(3000);
//         await driver.waitUntil(
//             () => driver.getContexts().length > 1,
//             {
//                 timeout: 5000,
//                 timeoutMsg: 'expected WEBVIEW_chrome to become available'
//             }
//         )

//         const frame = await $('/html/body/div[3]/div/div/iframe[1]');
//         await frame.waitForExist();

//         await browser.switchToFrame(frame);

//         const payPalButton = await $('/html/body/div[1]/div/div[1]/div');
//         await payPalButton.click();

//         await driver.pause(3000);

//         await driver.startActivity(appPackage, appActivity);

//         // await driver.pause(5000);

//         var currentActivity = await driver.getCurrentActivity();
//         await expectChai(currentActivity).to.equal(appActivity); 

//         // await driver.url("https://paypal.github.io/react-paypal-js/iframe.html?id=example-venmobutton--horizontal&viewMode=story");

//         // driver.url('https://paypal.github.io/react-paypal-js/iframe.html?id=example-venmobutton--horizontal&viewMode=story');


//     // var searchSelector = await $(`~Search Wikipedia`);
//     // await searchSelector.waitForDisplayed({ timeout: 30000 });
//     // await searchSelector.click();

//     // var insertTextSelector = await $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")');
//     // await insertTextSelector.waitForDisplayed({ timeout: 30000 });

//     // await insertTextSelector.addValue("Browsertack");
//     // await browser.pause(5000);

        
//     });
// });



describe('Deep Link', () => {
    it('can switch between app and browser', () => {

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
