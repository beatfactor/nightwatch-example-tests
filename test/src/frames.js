describe('frames', function() {
  // doesn't work in Chrome with --headless
  this.disabled = true;

  before(browser => {
    browser
      .url(browser.launchUrl + '/window/frames.html')
      .assert.visible('#popup-iframe');
  });

  after(browser => {
    browser.end();
  });

  test('switch to frame by selector', browser => {
    browser
      .switchToFrame('#popup-iframe')
      .assert.visible('form')
      .frameParent()
      .assert.visible('#popup-iframe');
  });

  test('switch to frame by id', browser => {
    browser
      .frame('popup')
      .assert.visible('form');
  });

});

