'use strict'

const mql = require('@microlink/mql')

module.exports = async (url, opts = {}) => {
  const { data } = await mql(url, {
    meta: false,
    screenshot: true,
    ...opts,
    scripts: [
      ...(opts.scripts || []),
      '[].forEach.call(document.querySelectorAll("*"),function(a){a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16)})'
    ]
  })

  return data.screenshot
}

module.exports.meta = {
  name: 'Debug CSS',
  description: 'A CSS debugger visualization for any screenshot.',
  examples: ['https://microlink.io']
}
