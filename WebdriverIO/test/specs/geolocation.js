describe('geolocation', () => {
  it('should load Swedish version of PayPal button', () => {
      browser.url('https://paypal.github.io/react-paypal-js/iframe.html?id=example-venmobutton--horizontal&viewMode=story');
      browser.maximizeWindow();


      const frame = $('/html/body/div[3]/div/div/iframe[1]');
      frame.waitForExist({ timeout: 10000 });

      const buttonFrame = browser.findElement('xpath', '/html/body/div[3]/div/div/iframe[1]');
 
      browser.switchToFrame(buttonFrame);

      const message = $('.paypal-button-tagline')
      message.waitForExist();
 
      expect(message).toHaveText('The safer, easier way to pay');
  });
})
