describe('Browserstack Login', function() {

  after(browser => {
    browser.end();
  });

  test('go to browserstack login page', browser => {
    const page = browser.page.browserstack();
    page.navigate();

    const {primaryMenu} = page.section;

    primaryMenu.assert.visible('@signIn');
    primaryMenu.click('@signIn');

    page.expect.section('@signInForm').visible;
    page.expect.section('@signInForm').enabled;

    const {signInForm} = page.section;
    signInForm.click('.google-logo-btn');
  });


  test('check if able to login to browserstack via google', browser => {
    browser.expect.url().to.contain('https://accounts.google.com').before(30000);
    browser.back();
  });

  test('check if able to signup for a new account', browser => {
    const page = browser.page.browserstack();
    const {signInForm} = page.section;

    page.expect.section('@signInForm').visible;

    signInForm
      .assert.containsText('@headline', 'Sign in')
      .assert.visible('@signupLink');

    browser.click('#accept-cookie-notification');

    signInForm
      .click('@signupLink')
      .assert.containsText('@headline', 'Create a FREE Account')
  });
});


