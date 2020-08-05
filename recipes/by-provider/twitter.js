'use strict'

const mql = require('@microlink/mql')

module.exports = (url, opts) =>
  mql(url, {
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

module.exports.meta = {
  name: 'Twitter',
  examples: ['https://twitter.com/microlinkhq']
}
