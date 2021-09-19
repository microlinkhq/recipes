'use strict'

const mql = require('@microlink/mql')

module.exports = async (url, opts) => {
  const { data } = await mql(url, {
    meta: false,
    data: {
      excerpt: {
        evaluate: async () => {
          const response = await window.fetch(
            'https://cdn.jsdelivr.net/npm/@mozilla/readability/Readability.js'
          )
          const script = await response.text()
          window.eval(script) // eslint-disable-line no-eval
          const reader = new window.Readability(window.document)
          return reader.parse().excerpt
        }
      }
    },
    ...opts
  })

  return data.excerpt
}

module.exports.meta = {
  name: 'Get Excerpt',
  description: 'Short extract resume for any website',
  examples: [
    'https://levelup.gitconnected.com/how-to-load-external-javascript-files-from-the-browser-console-8eb97f7db778'
  ]
}
