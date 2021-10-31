'use strict'

const mql = require('@microlink/mql')

module.exports = async (url, opts) => {
  const result = await mql(url, {
    data: {
      price: {
        selector: '#ProductPrice'
      }
    },
    ...opts
  })

  return result
}

module.exports.meta = {
  name: 'ripndip',
  examples: [
    'https://www.ripndipclothing.com/collections/shirts/products/lord-nermal-black'
  ]
}
