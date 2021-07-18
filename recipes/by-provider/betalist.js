'use strict'

const mql = require('@microlink/mql')

module.exports = (url, opts) =>
  mql(url, {
    meta: false,
    prerender: true,
    data: {
      startups: {
        selectorAll: '.startupCard',
        attr: {
          name: {
            selector: '.startupCard__details__name',
            type: 'text'
          },
          url: {
            selector: '.startupCard__visual',
            attr: 'href'
          },
          description: {
            selector: '.startupCard__details__pitch',
            type: 'text'
          },
          image: {
            selector: '.startupCard__visual__image',
            attr: ['src', 'poster'],
            type: 'url'
          }
        }
      }
    },
    ...opts
  })

module.exports.meta = {
  name: 'BetaList',
  examples: ['https://betalist.com/markets/developer-tools?page=1']
}
