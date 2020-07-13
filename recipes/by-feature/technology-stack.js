'use strict'

const mql = require('@microlink/mql')

module.exports = async (url, opts) =>
  mql(url, {
    meta: false,
    insights: {
      lighthouse: false,
      technologies: true
    },
    ...opts
  })

module.exports.info = {
  name: 'Technology Stack',
  logo: 'https://cdn.microlink.io/logos/wappalyzer.png',
  description: 'Detect web technologies behind a site',
  examples: ['https://example.com']
}
