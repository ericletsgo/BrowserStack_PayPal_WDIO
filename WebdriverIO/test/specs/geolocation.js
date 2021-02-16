describe('geolocation', () => {
  it('should load German version of PayPal button', () => {
      browser.url('https://paypal.github.io/react-paypal-js/iframe.html?id=example-venmobutton--horizontal&viewMode=story');

      const frame = $('/html/body/div[3]/div/div/iframe[1]');
      frame.waitForExist();

      browser.switchToFrame(frame);

      const message = $('.paypal-button-tagline');
 
      expect(message).toHaveText('Überall schnell und sicher bezahlen');
  });
})
