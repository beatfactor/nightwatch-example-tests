module.exports = {
  url: 'https://nightwatchjs.org',
  commands: [],
  elements: {
    indexContainer: '#index-container',
    notFoundContainer: '#wrong-selector',
  },
  sections: {
    navigation: {
      selector: '#navigation',

      elements: {
        navItem: 'li.nav-item'
      }
    },

    indexContainer: {
      selector: '#index-container',
      elements: {
        installButton: '.btn-download',
        githubButton: '.btn-github'
      },

      sections: {
        versionDropdown: {
          selector: '.navbar-nav .nav-item.dropdown',

          elements: {
            dropdownToggle: 'a.dropdown-toggle'
          },

          sections: {
            dropdownMenu: {
              selector: '.dropdown-menu',
              elements: {
                activeElement: 'a.dropdown-item.active',
                v09Link: 'a.dropdown-item:nth-child(5)'
              }
            }
          }
        },
      }
    }
  }
};
