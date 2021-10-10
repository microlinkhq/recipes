'use strict'

const microlink = require('@microlink/function')

const getExcerpt = microlink(async ({ query, page }) => {
  const { Readability } = require('@mozilla/readability')
  const { JSDOM, VirtualConsole } = require('jsdom')

  const html = await page.content()
  const dom = new JSDOM(html, {
    url: query.url,
    virtualConsole: new VirtualConsole()
  })

  const reader = new Readability(dom.window.document)
  return reader.parse().excerpt
})

const toValue = fn => async (...args) =>
  fn(...args).then(({ isFulfilled, value }) => (isFulfilled ? value : null))

module.exports = toValue(getExcerpt)

module.exports.meta = {
  name: 'Get Excerpt',
  description: 'Short extract resume for any website',
  examples: ['https://fithero.app']
}
