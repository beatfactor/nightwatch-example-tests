module.exports = {
  // not available in browserstack
  '@disabled': true,

  before(browser) {
    browser.url(browser.launchUrl + '/window/setValue.html');
  },

  after(browser) {
    browser.end();
  },

  getElementProperty(browser) {
    browser
      .assert.visible('form')
      .getElementProperty('#exampleInputSearch', 'classList', function(result) {
        browser.assert.deepStrictEqual(result, {
          value: ['form-control']
        });
      });
  },

  'demo test elementIdProperty' (browser) {
    browser
      .elements('css selector', '#exampleInputSearch', function(result) {
        const elementId = result.value ? (result.value[0]['element-6066-11e4-a52e-4f735466cecf'] || result.value[0].ELEMENT) : null;
        if (!elementId) {
          throw new Error('Element not found');
        }

        browser.elementIdProperty(elementId, 'classList', function(resultValue) {
          browser.assert.deepStrictEqual(resultValue, {
            value: ['form-control']
          });
        })
      });
  },

  'assert.domPropertyEquals'(browser) {
    browser.assert.domPropertyEquals('#exampleInputSearch', 'classList', ['form-control']);
  }
};
