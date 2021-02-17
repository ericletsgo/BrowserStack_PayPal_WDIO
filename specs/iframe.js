
describe('iFrame selection', () => {
    it('should let me find elements within the iFrame', () => {
        browser.url('https://paypal.github.io/react-paypal-js/iframe.html?id=example-venmobutton--horizontal&viewMode=story');

        const frame = $('/html/body/div[3]/div/div/iframe[1]');
        frame.waitForDisplayed();
        
        browser.switchToFrame(frame);

        const payPalButton = $('/html/body/div[1]/div/div[1]/div');
        payPalButton.waitForDisplayed();
        payPalButton.click();

        browser.switchWindow('Log in to your PayPal account');

        expect(browser).toHaveUrlContaining('https://www.paypal.com/checkoutnow?sessionID=');
    });
})
