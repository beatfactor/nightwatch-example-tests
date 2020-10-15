module.exports = {
  before(browser) {
    browser.url(browser.launchUrl + '/window/setValue.html');
  },

  after(browser) {
    browser.end();
  },

  getElementSize(browser) {
    browser
      .assert.visible('form')
      .assert.containsText('#releases-container', 'Search Test Page')
      .assert.elementPresent('#exampleInputSearch')
      .getElementSize('form', function(result) {
        console.info('result', result)
        browser.assert.ok(result.value.height >= 100);
        browser.assert.ok(result.value.width >= 400);
      });
  },

  'demo test elementIdSize' (browser) {
    browser
      .elements('css selector', 'form', function(result) {
        const elementId = result.value ? (result.value[0]['element-6066-11e4-a52e-4f735466cecf'] || result.value[0].ELEMENT) : null;
        if (!elementId) {
          throw new Error('Element not found');
        }
        browser.elementIdSize(elementId, function(resultValue) {
          browser.assert.ok(resultValue.value.height >= 100);
          browser.assert.ok(resultValue.value.width >= 400);
        })
      });
  }
};
