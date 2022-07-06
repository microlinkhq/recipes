'use strict'

const mql = require('@microlink/mql')

module.exports = async (url, opts) => {
  const result = await mql(url, {
    prerender: true,
    audio: true,
    data: {
      plays: {
        selector: '.sc-ministats-plays .sc-visuallyhidden',
        type: 'number'
      }
    },
    ...opts
  })

  return result
}

module.exports.meta = {
  name: 'SoundCloud',
  examples: ['https://soundcloud.com/beautybrainsp/beauty-brain-swag-bandicoot']
}
