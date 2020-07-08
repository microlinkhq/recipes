'use strict'

const mql = require('@microlink/mql')

module.exports = async (url, opts) =>
  mql(url, {
    meta: false,
    data: {
      html: {
        selector: 'html'
      }
    },
    ...opts
  })
