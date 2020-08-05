'use strict'

const mql = require('@microlink/mql')

module.exports = (url, opts) =>
  mql(url, {
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

module.exports.meta = {
  name: 'Google',
  examples: ['https://www.google.com/search?q=microlink']
}
