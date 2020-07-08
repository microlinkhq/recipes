'use strict'

const mql = require('@microlink/mql')

module.exports = async (url, opts) => {
  const { data } = await mql(url, {
    meta: false,
    data: {
      html: {
        selector: 'html'
      }
    },
    ...opts
  })

  return data.html
}

module.exports.info = {
  name: 'Retrieve HTML',
  description: 'Get all the HTML markup of the target URL',
  examples: ['https://example.com']
}
