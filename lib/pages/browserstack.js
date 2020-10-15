module.exports = {
  url: 'https://www.browserstack.com',

  sections: {
    primaryMenu: {
      selector: '#primary-menu',
      elements: {
        signIn: 'li:nth-child(5) a'
      }
    },

    signInForm: {
      selector: '#signin_signup_form',
      elements: {
        headline: 'h1',
        signupLink: '.sign-up-link'
      }
    },

    cardsWrapper: {
      selector: 'main .product-cards-wrapper .row:nth-child(2)',
      elements: {
        live: '.col-sm-4.no-pad:nth-child(1)',
        automate: '.col-sm-4.no-pad:nth-child(2)',
        percy: '.col-sm-4.no-pad:nth-child(3)'
      }
    }

  }
};
