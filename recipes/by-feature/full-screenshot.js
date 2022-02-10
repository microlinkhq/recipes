'use strict'

const mql = require('@microlink/mql')

module.exports = async (url, opts) => {
  const { data } = await mql(url, {
    meta: false,
    screenshot: true,
    fullPage: true,
    ...opts
  })

  return data.screenshot
}

module.exports.meta = {
  name: 'Full Page Screenshot',
  description: 'Generate a full page screenshot over the target URL',
  examples: ['https://eosrei.github.io/emojione-color-font/full-demo.html']
}
