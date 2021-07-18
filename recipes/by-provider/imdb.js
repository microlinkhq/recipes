'use strict'

const mql = require('@microlink/mql')

module.exports = async (url, opts) => {
  const result = await mql(url, {
    data: {
      director: {
        selector: '.ipc-metadata-list__item:nth-child(1) a',
        type: 'text'
      },
      writer: {
        selector: '.ipc-metadata-list__item:nth-child(2) a',
        type: 'text'
      },
      duration: {
        selector: '.ipc-inline-list__item[role="presentation"]:nth-child(3)',
        type: 'text'
      },
      year: {
        selector:
          '.ipc-inline-list__item[role="presentation"]:nth-child(1) span',
        type: 'number'
      },
      rating: {
        selector: '.rating-bar__base-button .ipc-button__text span',
        type: 'text'
      },
      ratingCount: {
        selector: '.rating-bar__base-button .ipc-button__text div:nth-child(3)',
        type: 'text'
      }
    },
    ...opts
  })

  if (result.data.rating) result.data.rating += ' of 10'
  if (result.data.duration) result.data.duration = result.data.duration.trim()
  return result
}

module.exports.meta = {
  name: 'IMDb',
  examples: ['https://www.imdb.com/title/tt1853728/']
}
