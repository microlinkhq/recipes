'use strict'

const mql = require('@microlink/mql')

module.exports = async (url, opts) => {
  const { data } = await mql(url, {
    meta: false,
    data: {
      images: {
        selectorAll: 'img',
        attr: 'src',
        type: 'image'
      }
    },
    ...opts
  })

  return data.images
}

module.exports.meta = {
  name: 'Images',
  description: 'Retrieve all the images of the target URL',
  examples: ['https://microlink.io']
}
