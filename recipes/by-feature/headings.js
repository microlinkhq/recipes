'use strict'

const mql = require('@microlink/mql')

module.exports = async (url, opts) => {
  const { data } = await mql(url, {
    meta: false,
    data: {
      h1: {
        selectorAll: 'h1',
        attr: 'text',
        type: 'title'
      },
      h2: {
        selectorAll: 'h2',
        attr: 'text',
        type: 'title'
      },
      h3: {
        selectorAll: 'h3',
        attr: 'text',
        type: 'title'
      },
      h4: {
        selectorAll: 'h4',
        attr: 'text',
        type: 'title'
      },
      h5: {
        selectorAll: 'h5',
        attr: 'text',
        type: 'title'
      },
      h6: {
        selectorAll: 'h6',
        attr: 'text',
        type: 'title'
      }
    },
    ...opts
  })

  return data
}

module.exports.meta = {
  name: 'Headings',
  description: 'Retrieve all the headings of the target URL',
  examples: ['https://microlink.io/']
}
