describe('Nightwatchjs.org homepage test', function() {
  this.desiredCapabilities = {
    os: 'Windows',
    os_version : '10',
    browserName : 'Chrome',
    browser_version : 'latest',
    resolution: '1440x900'
  };

  before(function(browser) {
    this.homepage = browser.page.home();
    this.homepage.navigate();
  });

  test('check install and github buttons', () => {
    const {indexContainer} = this.homepage.section;
    this.homepage.expect.section('@indexContainer').visible;

    indexContainer
      .assert.visible('@installButton')
      .assert.attributeEquals('@installButton', 'href', 'https://nightwatchjs.org/gettingstarted#installation')
      .assert.visible('@githubButton')
      .assert.attributeEquals('@githubButton', 'href', 'https://github.com/nightwatchjs/nightwatch');

    indexContainer
      .expect.element('@installButton').text.match(/INSTALL \(\d\.\d{1,2}\.\d{1,2}\)$/);
  });

  test('check main navigation', () => {
    const {navigation} = this.homepage.section;

    this.homepage.expect.section('@navigation').visible;

    navigation.expect.elements('@navItem').count.equal(5);
    navigation
      .assert.containsText('@navItem:nth-child(1)', 'Home')
      .assert.attributeEquals('@navItem:nth-child(1) a', 'href', 'https://nightwatchjs.org/')
      .assert.containsText('@navItem:nth-child(2)', 'Getting Started')
      .assert.attributeContains('@navItem:nth-child(2) a', 'href', '/gettingstarted/')
      .assert.containsText('@navItem:nth-child(3)', 'Developer Guide')
      .assert.attributeContains('@navItem:nth-child(3) a', 'href', '/guide/')
      .assert.containsText('@navItem:nth-child(4)', 'API Reference')
      .assert.attributeContains('@navItem:nth-child(4) a', 'href', '/api/')
      .assert.containsText('@navItem:nth-child(5)', 'About')
      .assert.attributeContains('@navItem:nth-child(5) a', 'href', '/about/')
  });

  test('version dropdown', browser => {
    const {versionDropdown} = this.homepage.section.indexContainer.section;

    versionDropdown.assert.visible('@dropdownToggle');
    versionDropdown.expect.section('@dropdownMenu').to.not.be.visible;

    versionDropdown.click('@dropdownToggle');

    versionDropdown.expect.section('@dropdownMenu').to.be.visible;

    versionDropdown.section.dropdownMenu
      .assert.visible('@activeElement')
      .expect.element('@activeElement').text.to.match(/Latest \(\d\.\d{1,2}\.\d{1,2}\)$/);

    versionDropdown.section.dropdownMenu.click('@v09Link');

    browser
      .assert.urlContains('http://v09.nightwatchjs.org')
      .back();
  });

  test('navigation to main sections', (browser) => {
    const {navigation} = this.homepage.section;

    this.homepage.expect.section('@navigation').visible;

    navigation.click('@navItem:nth-child(2)');
    browser
      .assert.urlContains('/gettingstarted/')
      .assert.titleContains('Getting Started')
      .back();

    navigation.click('@navItem:nth-child(3)');
    browser
      .assert.urlContains('/guide/')
      .refresh() // FIXME: Bug with setting the page title correctly on the guide page
      .assert.titleContains('Developer Guide')
      .click('#navbartop .nav-item:nth-child(1)')
      .assert.titleContains('Nightwatch.js | ');

    navigation.click('@navItem:nth-child(4)');
    browser
      .assert.urlContains('/api/')
      .assert.titleContains('API Reference')
      .back();

    navigation.click('@navItem:nth-child(5)');
    browser
      .assert.urlContains('/about/')
      .assert.titleContains('About')
      .back();
  });

  after(browser => browser.end());
});
