'use strict'

const mql = require('@microlink/mql')

module.exports = (url, opts) =>
  mql(url, {
    data: {
      price: {
        selector: '#our_price_display',
        attr: 'content',
        type: 'number'
      }
    },
    ...opts
  })

module.exports.meta = {
  name: 'Wipoid',
  examples: ['https://www.wipoid.com/msi-mag-b550m-mortar-wifi.html']
}
