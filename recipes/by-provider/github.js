'use strict'

const mql = require('@microlink/mql')

module.exports = (url, opts) =>
  mql(url, {
    data: {
      stats: {
        selector: '.application-main',
        attr: {
          followers: {
            selector: '.js-profile-editable-area a[href*="tab=followers"] span',
            type: 'number'
          },
          following: {
            selector: '.js-profile-editable-area a[href*="tab=following"] span',
            type: 'number'
          },
          stars: {
            selector: '.js-responsive-underlinenav a[data-tab-item="stars"] span',
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
