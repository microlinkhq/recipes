'use strict'

const microlink = require('@microlink/function')

const code = `({ url, html }) => {
  const htmlUrls = require('html-urls')
  return htmlUrls({ html, url }).map(({ url }) => url)
}`

module.exports = microlink(code)
module.exports.code = code
module.exports.meta = {
  name: 'URIs',
  description: 'Retrieve all the URIs over the target URL',
  examples: ['https://rauchg.com/']
}
