module.exports = {
  before(browser) {
    browser.url(browser.launchUrl + '/window/setValue.html');
  },

  after(browser) {
    browser.end();
  },

  getText(browser) {
    browser
      .assert.visible('form')
      .assert.containsText('.page-header h2', 'Search Test Page')
      .assert.containsText('#releases-container h1', 'Sample E2E Tests')
      .click('#navbartop li:first-child a')
      .assert.visible('#top-section h1')
      .assert.containsText('#top-section', 'Nightwatch')
      .assert.containsText('#top-section', 'End-to-end testing, the easy way.')
  }
};
