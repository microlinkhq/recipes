'use strict'

const mql = require('@microlink/mql')

module.exports = async (url, opts) => {
  const result = await mql(url, {
    data: {
      results: {
        selectorAll: '.g',
        attr: {
          title: {
            selector: 'h3',
            attr: 'text'
          },
          description: {
            selector: '.g .s span.st',
            attr: 'text'
          },
          breadcumb: {
            selector: 'cite',
            attr: 'text',
            type: 'text'
          },
          link: {
            selector: 'a',
            attr: 'href',
            type: 'url'
          }
        }
      }
    },
    ...opts
  })

  result.data.results = result.data.results.filter(({ title }) => !!title)
  return result
}

module.exports.meta = {
  name: 'Google',
  examples: ['https://www.google.com/search?q=microlink']
}
