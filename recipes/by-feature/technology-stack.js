'use strict'

const mql = require('@microlink/mql')

module.exports = async (url, opts) => {
  const { data } = await mql(url, {
    meta: false,
    insights: {
      lighthouse: false,
      technologies: true
    },
    ...opts
  })

  return data.insights.technologies
}

module.exports.meta = {
  name: 'Technology Stack',
  logo: 'https://cdn.microlink.io/logos/wappalyzer.png',
  description: 'Detect web technologies behind a site',
  examples: ['https://example.com']
}
