'use strict'

const mql = require('@microlink/mql')

module.exports = async (url, opts) => {
  const result = await mql(url, {
    prerender: true,
    video: true,
    audio: true,
    data: {
      views: {
        selector: '.view-count',
        type: 'number'
      }
    },
    ...opts
  })

  return result
}

module.exports.meta = {
  name: 'YouTube',
  examples: ['https://www.youtube.com/watch?v=dQw4w9WgXcQ']
}
