describe('Browserstack homepage tests', function() {

  this.desiredCapabilities = {
    os: 'Windows',
    os_version : '10',
    browserName : 'Chrome',
    browser_version : 'latest',
    resolution: '1440x900'
  };

  before(function(browser) {
    this.homepage = browser.page.browserstack();
    this.homepage.navigate();
  });

  after(browser => {
    browser.end();
  });


  test('go to browserstack homepage', browser => {
    this.homepage.expect.section('@cardsWrapper').visible;

    const {cardsWrapper} = this.homepage.section;

    cardsWrapper
      .assert.visible('@live')
      .assert.containsText('@live', 'Interactive cross browser')
      .assert.visible('@automate')
      .assert.containsText('@automate', 'Selenium testing')
      .assert.visible('@percy')
      .assert.containsText('@percy', 'Visual testing ');
  });


  test('check cards navigation', browser => {
    const {cardsWrapper} = this.homepage.section;

    cardsWrapper.click('@live');
    browser
      .assert.urlContains('/live')
      .assert.titleContains('Cross Browser Testing')
      .back();

    cardsWrapper.click('@automate');

    browser
      .assert.urlContains('/automate')
      .assert.titleContains('Automated Selenium Testing')
      .back();

    cardsWrapper.click('@percy');

    browser
      .assert.urlContains('/percy')
      .assert.titleContains('Visual testing and review')
      .back();
  });

});


