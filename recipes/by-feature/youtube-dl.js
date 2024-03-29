'use strict'

const microlink = require('@microlink/function')

const code = `async ({ url, html }) => {
  const youtubedl = require('youtube-dl-exec')

  return youtubedl(url, {
    dumpSingleJson: true,
    noCheckCertificates: true,
    noWarnings: true,
    preferFreeFormats: true
  })
}`

module.exports = microlink(code)
module.exports.code = code
module.exports.meta = {
  name: 'youtube-dl',
  description:
    'Get metadata for any video URL. Over 700 online video services supported.',
  examples: ['https://imrane.substack.com/p/la-guerre-de-troie-pour-ecrire-un']
}
