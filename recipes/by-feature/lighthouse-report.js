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
  description: 'Generate a Lighthouse full report',
  examples: ['https://example.com']
}
