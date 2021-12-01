'use strict'

const mql = require('@microlink/mql')

module.exports = async (url, opts) => {
  const { data } = await mql(url, {
    meta: false,
    screenshot: true,
    ...opts
  })

  return data.screenshot
}

module.exports.meta = {
  name: 'Screenshot',
  description: 'Generate a screenshot over the target URL',
  examples: ['https://vercel.com']
}
