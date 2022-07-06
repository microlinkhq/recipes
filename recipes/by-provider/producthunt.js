'use strict'

const mql = require('@microlink/mql')

module.exports = (url, opts) =>
  mql(url, {
    data: {
      reviews: {
        selector: 'div div div div div div a[href$="reviews"]'
      }
    },
    ...opts
  })

module.exports.meta = {
  name: 'Product Hunt',
  examples: ['https://www.producthunt.com/products/microlink-io']
}
