'use strict'

const mql = require('@microlink/mql')

module.exports = (url, opts) =>
  mql(url, {
    data: {
      price: {
        selector: '#attach-base-product-price',
        attr: 'val',
        type: 'number'
      },
      currency: {
        selector: '#attach-base-product-currency-symbol',
        attr: 'val'
      }
    },
    ...opts
  })

module.exports.meta = {
  name: 'Amazon',
  examples: ['https://www.amazon.com/dp/B09JQML3NL']
}
