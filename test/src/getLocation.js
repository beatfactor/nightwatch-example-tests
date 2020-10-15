describe('getLocation', function() {
  const WEB_ELEMENT_ID = 'element-6066-11e4-a52e-4f735466cecf';
  before(browser => browser.url(browser.launchUrl + '/window/setValue.html'));

  after(browser => {
    browser.end();
  });

  test('getLocation', browser => {
    browser
      .assert.visible('form')
      .getLocation('form', function(result) {
        browser.assert.strictEqual(result.value.x, 30);
        browser.assert.ok(result.value.y > 280);
      });
  });

  test('demo test getActiveElement', async browser => {
    const elementsResult = await browser.elements('css selector', 'form');
    const elementId = elementsResult.value[0][WEB_ELEMENT_ID] || elementsResult.value[0].ELEMENT;
    const rectValue = await browser.elementIdLocation(elementId, function(result) {
      return result.value;
    });

    browser.assert.strictEqual(rectValue.x, 30);
    browser.assert.ok(rectValue.y > 280);
  });


  xtest('getLocationInView in W3C Webdriver', async browser => {
    let thrownErr;

    try {
      await browser.getLocationInView('body');
    } catch (err) {
      thrownErr = err;
    }

    browser.assert.ok(thrownErr instanceof Error);
    browser.assert.strictEqual(thrownErr.name, 'TimeoutError');
  });
});

