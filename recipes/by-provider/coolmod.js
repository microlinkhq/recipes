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

  if (result.data.price) result.data.price = result.data.price.trim()

  return result
}

module.exports.meta = {
  name: 'Coolmod',
  examples: [
    'https://www.coolmod.com/gigabyte-aorus-geforce-rtx-3080-ti-xtreme-12gb-gddr6x-vga'
  ]
}
