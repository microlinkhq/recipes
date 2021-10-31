'use strict'

const mql = require('@microlink/mql')

module.exports = async (url, opts) => {
  const result = await mql(url, {
    data: {
      price: {
        selector: '.money'
      }
    },
    ...opts
  })

  return result
}

module.exports.meta = {
  name: 'ASSC',
  examples: [
    'https://www.antisocialsocialclub.com/products/assc-x-case-study-flag-black-hoodie?variant=41157788532934'
  ]
}
