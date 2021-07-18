'use strict'

const demoLinks = require('@microlink/demo-links')
const mql = require('@microlink/mql')

module.exports = async (url, opts) => {
  const { data } = await mql(url, {
    meta: false,
    iframe: { maxWidth: 350 },
    ...opts
  })

  return data.iframe
}

module.exports.meta = {
  name: 'Universal Embed',
  description: 'Display embedded content, in a unified way',
  examples: [
    demoLinks.YouTube.url,
    // demoLinks.Vimeo.url
    demoLinks.SoundCloud.url,
    demoLinks.Twitter.url
  ]
}
