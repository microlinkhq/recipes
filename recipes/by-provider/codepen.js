'use strict'

const mql = require('@microlink/mql')

module.exports = async (url, opts) => {
  const result = await mql(url, {
    meta: false,
    screenshot: true,
    styles: ['.main-header, .oldie-header {display: none}'],
    ...opts
  })

  return result
}

module.exports.meta = {
  name: 'CodePen',
  examples: ['https://codepen.io/carolineartz/full/rNaGQYo']
}
