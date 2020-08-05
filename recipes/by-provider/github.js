'use strict'

const mql = require('@microlink/mql')

module.exports = (url, opts) =>
  mql(url, {
    data: {
      stats: {
        selector: '.js-profile-editable-area',
        attr: {
          followers: {
            selector: 'a[href*="tab=followers"] span',
            type: 'number'
          },
          following: {
            selector: 'a[href*="tab=following"] span',
            type: 'number'
          },
          stars: {
            selector: 'a[href*="tab=stars"] span',
            type: 'number'
          }
        }
      }
    },
    ...opts
  })

module.exports.meta = {
  name: 'GitHub',
  examples: ['https://github.com/kikobeats']
}
