describe('cookies', function() {

  before(browser => browser.url(browser.launchUrl + '/window/setValue.html'));

  after(browser => {
    browser.end();
  });

  beforeEach(browser => {
    browser
      .assert.visible('form')
      .setCookie({
        name: 'nightwatch-test',
        value: 'test-value'
      }, function(result) {
        browser.assert.strictEqual(result.value, null);
      });
  });

  test('getCookies', browser => {
    browser
      .getCookie('nightwatch-test', function(result) {
        browser.assert.strictEqual(result.value, 'test-value');
        browser.assert.strictEqual(result.name, 'nightwatch-test');
      })
      .getCookies(function(result) {
        browser.assert.strictEqual(result.value[0].name, 'nightwatch-test');
        browser.assert.strictEqual(result.value[0].value, 'test-value');
      })
  });

  test('deleteCookie', browser => {
    browser
      .deleteCookie('nightwatch-test', function(result) {
        browser.assert.strictEqual(result.value, null);
      })
      .getCookies(function(result) {
        browser.assert.strictEqual(result.value.length, 0);
      });
  });

  test('delete all cookies', browser => {
    browser
      .deleteCookies(function(result) {
        browser.assert.strictEqual(result.value, null);
      })
      .getCookies(function(result) {
        browser.assert.strictEqual(result.value.length, 0);
      });
  });
});

