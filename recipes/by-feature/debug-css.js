'use strict'

const mql = require('@microlink/mql')

module.exports = async (url, { scripts = [], ...opts } = {}) => {
  const { data } = await mql(url, {
    meta: false,
    screenshot: true,
    scripts: [
      ...scripts,
      '[].forEach.call(document.querySelectorAll("*"),function(a){a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16)})'
    ],
    ...opts
  })

  return data.screenshot
}

module.exports.meta = {
  name: 'Debug CSS',
  description: 'A CSS debugger visualization for any screenshot.',
  examples: ['https://microlink.io']
}
