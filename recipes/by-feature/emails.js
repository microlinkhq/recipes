'use strict'

const mql = require('@microlink/mql')

module.exports = async (url, opts) => {
  const { data } = await mql(url, {
    meta: false,
    data: {
      emails: {
        selector: 'body',
        type: 'email'
      }
    },
    ...opts
  })

  return data.emails
}

module.exports.meta = {
  name: 'Get emails',
  description: 'Detect all email addresses present in a website',
  examples: ['https://www.raycast.com']
}
