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
  name: 'Emails',
  description: 'Find any email inside a website',
  examples: ['https://www.raycast.com']
}
