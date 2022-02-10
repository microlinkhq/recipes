'use strict'

const mql = require('@microlink/mql')

module.exports = (url, opts) =>
  mql(url, {
    data: {
      name: {
        selector: 'h1',
        attr: 'text',
        type: 'string'
      },
      upvotes: {
        selector: 'button span span:nth-child(3)',
        attr: 'text',
        type: 'string'
      }
    },
    ...opts
  })

module.exports.meta = {
  name: 'Product Hunt',
  examples: ['https://www.producthunt.com/posts/microlink-2-0']
}
