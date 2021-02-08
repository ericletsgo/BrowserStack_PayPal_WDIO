
describe('iFrame selection', () => {
    it('should let me find elements within the iFrame', () => {
        browser.url('https://paypal.github.io/react-paypal-js/iframe.html?id=example-venmobutton--horizontal&viewMode=story');
        browser.maximizeWindow();

        const buttonFrame = browser.findElement('xpath', '/html/body/div[3]/div/div/iframe[1]');
 
        browser.switchToFrame(buttonFrame);

        const payPalButton = $('/html/body/div[1]/div/div[1]/div');
        payPalButton.waitForExist();
        payPalButton.click();
    });
})
