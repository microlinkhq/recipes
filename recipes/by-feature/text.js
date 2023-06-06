'use strict'

const microlink = require('@microlink/function')

const code = `async ({ url, html }) => {
  const condenseWhitespace = require('condense-whitespace')
  const { Readability } = require('@mozilla/readability')
  const { JSDOM, VirtualConsole } = require('jsdom')

  const dom = new JSDOM(html, {
    url,
    virtualConsole: new VirtualConsole()
  })

  const reader = new Readability(dom.window.document)
  const { textContent } = reader.parse()
  return condenseWhitespace(textContent)
}`

module.exports = microlink(code)
module.exports.code = code
module.exports.meta = {
  name: 'Text',
  description: 'Get the text content of the target URL',
  examples: [
    'https://geohot.github.io/blog/jekyll/update/2023/04/26/a-person-of-compute.html'
  ]
}
