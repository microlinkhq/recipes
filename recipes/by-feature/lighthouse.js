'use strict'

const mql = require('@microlink/mql')

module.exports = async (url, opts) => {
  const { data } = await mql(url, {
    meta: false,
    technologies: false,
    insights: {
      lighthouse: {
        preset: 'lr-mobile'
      }
    },
    ...opts
  })

  return data.insights.lighthouse
}

module.exports.meta = {
  name: 'Lighthouse',
  logo: 'https://cdn.microlink.io/logos/lighthouse.png',
  description: 'Run Lighthouse on demand',
  examples: ['https://example.com']
}
