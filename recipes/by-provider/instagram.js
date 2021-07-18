'use strict'

const mql = require('@microlink/mql')

module.exports = async (url, opts) => {
  const result = await mql(url, {
    data: {
      avatar: {
        selector: 'meta[property="og:image"]',
        attr: 'content',
        type: 'image'
      },
      stats: {
        selector: 'meta[property="og:description"]',
        attr: 'content'
      }
    },
    ...opts
  })

  if (result.data.stats) {
    result.data.stats = result.data.stats.split(' - ')[0]
    result.data.stats = result.data.stats.split(', ')
    result.data.stats = result.data.stats.reduce((acc, info) => {
      const [value, key] = info.split(' ')
      return { ...acc, [key.toLowerCase()]: value }
    }, {})
  }

  return result
}

module.exports.meta = {
  name: 'Instagram',
  examples: ['https://www.instagram.com/willsmith']
}
