'use strict'

const mql = require('@microlink/mql')

module.exports = (url, opts) =>
  mql(url, {
    data: {
      name: {
        selector: 'h1 a',
        attr: 'text',
        type: 'string'
      },
      upvotes: {
        selector: '.bigButtonCount_10448',
        attr: 'text',
        type: 'string'
      }
    },
    ...opts
  })

module.exports.examples = ['https://www.producthunt.com/posts/microlink-2-0']
