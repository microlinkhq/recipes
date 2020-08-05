'use strict'

const mql = require('@microlink/mql')

module.exports = async (url, opts) =>
  mql(url, {
    meta: false,
    iframe: {
      maxWidth: 350
    },
    ...opts
  })

module.exports.meta = {
  name: 'Universal Embed',
  description: 'Display embedded content, in a unified way',
  examples: ['https://example.com']
}
