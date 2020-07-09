'use strict'

const mql = require('@microlink/mql')

module.exports = async (url, opts) =>
  mql(url, {
    meta: false,
    insights: {
      lighthouse: true,
      technologies: false
    },
    ...opts
  })

module.exports.info = {
  name: 'Lighthouse Report',
  logo: 'https://cdn.microlink.io/logos/lighthouse.png',
  description: 'Generate a Lighthouse full report',
  examples: ['https://example.com']
}
