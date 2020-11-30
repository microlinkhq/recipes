'use strict'

const mql = require('@microlink/mql')

module.exports = async (url, opts) => {
  const { data } = await mql(url, {
    meta: false,
    data: {
      jsonLd: {
        selectorAll: 'script[type="application/ld+json"]'
      }
    },
    ...opts
  })

  return data.jsonLd
}

module.exports.meta = {
  name: 'Get JSON+LD',
  description: 'Retrieve all JSON+LD elements present on the website',
  examples: ['https://teslahunt.io/5YJSA7E49JF269238']
}
