'use strict'

const mql = require('@microlink/mql')

module.exports = async (url, opts) => {
  const { data } = await mql(url, {
    meta: false,
    pdf: true,
    ...opts
  })

  return data.pdf
}

module.exports.meta = {
  name: 'PDF',
  description: 'Generate a PDF over the target URL',
  examples: ['https://rauchg.com/2014/7-principles-of-rich-web-applications']
}
