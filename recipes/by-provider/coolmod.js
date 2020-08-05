'use strict'

const mql = require('@microlink/mql')

module.exports = async (url, opts) => {
  const result = await mql(url, {
    data: {
      price: {
        selector: '.container-price-total',
        attr: 'text'
      },
      image: {
        selector: '#_image2',
        attr: 'src',
        type: 'url'
      }
    },
    ...opts
  })

  result.data.price = result.data.price.trim()

  return result
}

module.exports.meta = {
  name: 'Coolmod',
  examples: [
    'https://www.coolmod.com/msi-mag-b550-tomahawk-socket-am4-placa-base-precio'
  ]
}
