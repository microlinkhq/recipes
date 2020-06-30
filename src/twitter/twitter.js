const mql = require('@microlink/mql')

module.exports = (username, opts) =>
  mql(`https://twitter.com/${username}`, {
    data: {
      stats: {
        selector: '.ProfileNav-list',
        attr: {
          tweets: {
            selector: '.ProfileNav-item--tweets .ProfileNav-value',
            attr: 'data-count'
          },
          followings: {
            selector: '.ProfileNav-item--following .ProfileNav-value',
            attr: 'data-count'
          },
          followers: {
            selector: '.ProfileNav-item--followers .ProfileNav-value',
            attr: 'data-count'
          }
        }
      }
    },
    ...opts
  })
