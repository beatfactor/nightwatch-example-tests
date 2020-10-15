describe('executeScript', function() {
  const WEBDRIVER_ELEMENT_ID = 'element-6066-11e4-a52e-4f735466cecf';

  before(browser => browser.url(browser.launchUrl + '/window/setValue.html'));

  after(browser => {
    browser.end();
  });

  test('execute sync', browser => {

    browser
      .assert.visible('form')
      .execute(function(id) {
        return document.getElementById(id);
      }, ['exampleInputSearch'], function(result) {
        browser.assert.ok(WEBDRIVER_ELEMENT_ID in result.value || result.value.ELEMENT);
      })
      .execute(function(tag) {
        return document.getElementsByTagName(tag);
      }, ['body'], function(result) {
        browser.assert.strictEqual(result.value.length, 1);
      });
  });

  test('execute async', browser => {
    browser
      .assert.visible('form')
      .executeAsync(function(id, done) {
        setTimeout(function() {var el = document.getElementById(id); done(el);}, 100);
      }, ['exampleInputSearch'], function(result) {
        browser.assert.ok(WEBDRIVER_ELEMENT_ID in result.value || result.value.ELEMENT);
      })
      .executeAsync(function(tag, done) {
        setTimeout(function() {var el = document.getElementsByTagName(tag);done(el);}, 100);
      }, ['body'], function(result) {
        browser.assert.strictEqual(result.value.length, 1);
      });
  });
});

