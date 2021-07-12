'use strict'

const mql = require('@microlink/mql')

module.exports = (url, opts) =>
  mql(url, {
    data: {
      karma: {
        selector: '#profile--id-card--highlight-tooltip--karma'
      },
      birthday: {
        selector: '#profile--id-card--highlight-tooltip--cakeday'
      },
      avatar: {
        selector: 'img[alt="User avatar"]',
        attr: 'src',
        type: 'url'
      }
    },
    ...opts
  })

module.exports.meta = {
  name: 'Reddit',
  examples: ['https://www.reddit.com/user/kikobeats']
}
