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
  description: 'Detect the tech stack used in a site',
  examples: ['https://example.com']
}
