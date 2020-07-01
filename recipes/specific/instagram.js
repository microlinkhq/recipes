'use strict'

const mql = require('@microlink/mql')

module.exports = (username, opts) =>
  mql(`https://www.instagram.com/${username}`, {
    data: {
      avatar: {
        selector: 'meta[property="og:image"]',
        attr: 'content',
        type: 'image'
      }
    },
    ...opts
  })
