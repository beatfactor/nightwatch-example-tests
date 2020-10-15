describe('alerts', function() {

  before(browser => {
    browser
      .url(browser.launchUrl + '/window/alerts.html');
  });

  after(browser => {
    browser.end();
  });

  test('get alert text', async browser => {
    browser.click('#show-alert');
    const result = await browser.getAlertText();
    browser.assert.strictEqual(result.value, 'Alert test');

    browser.dismissAlert(function(result) {
      browser.assert.strictEqual(result.status, 0);
    });
  });

  test('prompt dialog', async browser => {
    browser.click('#show-prompt');
    const result = await browser.getAlertText();
    browser.assert.strictEqual(result.value, 'Prompt text');

    browser.dismissAlert(function(result) {
      browser.assert.strictEqual(result.status, 0);
    });
  });

  test('confirmation dialog', async browser => {
    browser.click('#show-confirm');
    const result = await browser.getAlertText();
    browser.assert.strictEqual(result.value, 'Are you sure?');

    browser.acceptAlert(function(result) {
      browser.assert.strictEqual(result.status, 0);
    });
  });
});

