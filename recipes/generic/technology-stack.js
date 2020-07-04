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
