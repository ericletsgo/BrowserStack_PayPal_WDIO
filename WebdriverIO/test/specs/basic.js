
describe('basic desktop flow', () => {
    it('should naviage to PayPal page with correct title', () => {
        browser.url('https://paypal.github.io/react-paypal-js/iframe.html?id=example-venmobutton--horizontal&viewMode=story');
        browser.maximizeWindow();
        expect(browser).toHaveTitle('Storybook');
    });
    it('should launch a browser pop-up when paying without any associated apps', async () => {
        const buttonFrame = await $('/html/body/div[3]/div/div/iframe[1]');
        await buttonFrame.waitForExist({ timeout: 10000 });
   
        await browser.switchToFrame(buttonFrame);

        // expect(browser).toHaveTitle('');

        const payPalButton = await $('/html/body/div[1]/div/div[1]/div');
        await payPalButton.waitForExist();
        await payPalButton.click();
       
        // const elem = await $('');
        // await expect(browser).
    });
})
