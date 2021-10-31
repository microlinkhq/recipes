'use strict'

const mql = require('@microlink/mql')

module.exports = async (url, opts) => {
  const result = await mql(url, {
    audio: true,
    ...opts
  })

  return result
}

module.exports.meta = {
  name: 'Spotify',
  examples: ['https://open.spotify.com/track/5kn2FMZoBVClbA9CV7w3k5']
}
