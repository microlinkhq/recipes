'use strict'

const mql = require('@microlink/mql')

module.exports = (url, opts) =>
  mql(url, {
    data: {
      avatar: {
        selector: 'meta[property="og:image"]',
        attr: 'content',
        type: 'image'
      }
    },
    ...opts
  })

module.exports.examples = ['https://www.instagram.com/willsmith']
