module.exports = {
  before(browser) {
    browser.url(browser.launchUrl + '/window/setValue.html');
  },

  after(browser) {
    browser.end();
  },

  getTitle(browser) {
    browser
      .assert.visible('form')
      .getTitle(function(result) {
        browser.assert.strictEqual(result, 'Nightwatch.js E2E Sample Tests');
      });
  },

  getCurrentUrl(browser) {
    browser.url(function(result) {
      browser.assert.ok(result.value.endsWith('nightwatchjs.org/__e2e/window/setValue.html'));
    });
  }
};
