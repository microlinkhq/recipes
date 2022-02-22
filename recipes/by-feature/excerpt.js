'use strict'

const microlink = require('@microlink/function')

const code = `async ({ url, html }) => {
  const { Readability } = require('@mozilla/readability')
  const { JSDOM, VirtualConsole } = require('jsdom')

  const dom = new JSDOM(html, {
    url,
    virtualConsole: new VirtualConsole()
  })

  const reader = new Readability(dom.window.document)
  return reader.parse().excerpt
}`

module.exports = microlink(code)
module.exports.code = code
module.exports.meta = {
  name: 'Excerpt',
  description: 'Get the article description, or short excerpt from the content',
  examples: ['https://developer.redis.com']
}
