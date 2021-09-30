'use strict'

const mql = require('@microlink/mql')

module.exports = async (url, opts) => {
  const { data } = await mql(url, {
    meta: false,
    screenshot: true,
    styles: ['.main-header, .oldie-header {display: none}'],
    ...opts
  })

  return data.screenshot.url
}

module.exports.meta = {
  name: 'CodePen',
  examples: ['https://codepen.io/fossheim/full/oNjxrZa']
}
