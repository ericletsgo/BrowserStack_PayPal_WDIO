
describe('iFrame page', () => {
    it('should naviage to PayPal page with correct title', () => {
        browser.url('https://paypal.github.io/react-paypal-js/iframe.html?id=example-venmobutton--horizontal&viewMode=story');
        browser.maximizeWindow();
        expect(browser).toHaveTitle('Storybook');
    });
    it('should be able to switch to iFrame', async () => {
        const buttonFrame = await $('/html/body/div[3]/div/div/iframe[1]');
        await buttonFrame.waitForExist({timeout:10000});
        // buttonFrame.waitForExist({ timeout: 20000 })
        //     .frame( 'button', ( err, result ) => {
        //         if ( err ) console.log err;
        //         expect ( err ).to.be.a( 'null' );
        //     }) 
        await browser.switchToFrame(buttonFrame);
        // expect(browser).toHaveTitle('');
        const payPalButton = await $('/html/body/div[1]/div/div[1]/div');
        await payPalButton.waitForExist();
        await payPalButton.click();
        // await $('#w3loginbtn').click();
    });
})
