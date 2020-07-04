'use strict'

const mql = require('@microlink/mql')

module.exports = (slug, opts) =>
  mql(`https://www.wipoid.com/${slug}.html`, {
    data: {
      price: {
        selector: '#our_price_display',
        attr: 'content',
        type: 'number'
      }
    },
    ...opts
  })
