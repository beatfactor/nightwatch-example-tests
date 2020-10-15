describe('navigate', function() {

  before(browser => {
    browser
      .url(browser.launchUrl + '/window/frames.html')
      .click('#navbartop a[href="/gettingstarted"]');
  });

  after(browser => {
    browser.end();
  });

  test('go back', browser => {
    browser
      .back()
      .assert.urlContains('/window/frames.html')
      .forward()
      .assert.urlContains('/gettingstarted')
      .refresh(function(result) {
        browser.assert.strictEqual(result.status, 0);
      })
      .closeWindow()

  });


});

