describe('iFrame page', () => {
  it('should naviage to PayPal page with correct title', () => {
      browser.url('https://paypal.github.io/react-paypal-js/iframe.html?id=example-venmobutton--horizontal&viewMode=story');
      browser.maximizeWindow();
      expect(browser).toHaveTitle('Storybook');
  });
  it('should launch a browser pop-up when paying without any associated apps', () => {
      const message = $('/html/body/div/div/div[2]/span')
      message.waitForExist();
 
      expect(message).toHaveText('The safer, easier way to pay');
  });
})
