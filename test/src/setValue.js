module.exports = {
  'demo test setValue': function(browser) {
    browser
      .url(browser.launchUrl + '/window/setValue.html')
      .assert.visible('form')
      .setValue('#exampleInputSearch', 'test search')
      .click('button[type=submit]')
      .assert.urlContains('?input=test+search')
      .end();
  }
};
