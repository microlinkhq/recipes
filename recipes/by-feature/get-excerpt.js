'use strict'

const microlink = require('@microlink/function')

module.exports = microlink(`async ({ query, page }) => {
  const { Readability } = require('@mozilla/readability')
  const { JSDOM, VirtualConsole } = require('jsdom')

  const html = await page.content()
  const dom = new JSDOM(html, {
    url: query.url,
    virtualConsole: new VirtualConsole()
  })

  const reader = new Readability(dom.window.document)
  return reader.parse().excerpt
}`)

module.exports.meta = {
  name: 'Get Excerpt',
  description: 'Short extract resume for any website',
  examples: ['https://fithero.app']
}
