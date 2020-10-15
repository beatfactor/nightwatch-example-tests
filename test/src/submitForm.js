module.exports = {
  before(browser) {
    browser.url(browser.launchUrl + '/window/setValue.html');
  },

  after(browser) {
    browser.end();
  },

  submitForm(browser) {
    browser
      .assert.visible('form')
      .setValue('#exampleInputSearch', 'input')
      .submitForm('form')
      .assert.urlContains('?input=input')
  },

  'demo test submit' (browser) {
    browser
      .setValue('#exampleInputSearch', 'newinput')
      .elements('css selector', 'form', function(result) {
        const elementId = result.value ? (result.value[0]['element-6066-11e4-a52e-4f735466cecf'] || result.value[0].ELEMENT) : null;
        if (!elementId) {
          throw new Error('Element not found');
        }
        browser.submit(elementId);
      })
      .assert.urlContains('?input=newinput');
  }
};
