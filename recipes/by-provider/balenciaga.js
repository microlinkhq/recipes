'use strict'

const mql = require('@microlink/mql')

module.exports = async (url, opts) => {
  const result = await mql(url, {
    prerender: true,
    data: {
      currency: {
        selector: '[itemprop="priceCurrency"]',
        attr: 'content'
      },
      price: {
        selector: '[itemprop="price"]',
        attr: 'content'
        // type: 'number'
      }
    },
    ...opts
  })

  return result
}

module.exports.meta = {
  name: 'Balenciaga',
  examples: [
    'https://www.balenciaga.com/en-us/speed-recycled-sneaker-black-white-645056W2DBQ1015.html'
  ]
}
