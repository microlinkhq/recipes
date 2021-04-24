'use strict'

const mql = require('@microlink/mql')

module.exports = async (url, opts) => {
  const { data } = await mql(url, {
    meta: false,
    data: {
      favicon: [
        {
          selector: 'link[href*="favicon.ico"]',
          attr: 'href',
          type: 'image'
        },
        {
          selector: 'link[type="image/x-icon"]',
          attr: 'href',
          type: 'image'
        }
      ]
    },
    ...opts
  })

  return data.favicon
}

module.exports.meta = {
  name: 'Get Favicon',
  description: 'Retrieve the favicon for any website',
  examples: ['https://microlink.io']
}
