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

module.exports.info = {
  name: 'Universal Embed',
  description: 'Add embeddable media to your site',
  examples: ['https://example.com']
}
