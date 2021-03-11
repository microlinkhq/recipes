'use strict'

const mql = require('@microlink/mql')

module.exports = async (url, opts) => {
  const result = await mql(url, {
    data: {
      director: {
        selector: '.credit_summary_item:nth-child(2) a',
        type: 'text'
      },
      writer: {
        selector: '.credit_summary_item:nth-child(3) a',
        type: 'text'
      },
      duration: {
        selector: '.title_wrapper time',
        type: 'text'
      },
      release: {
        selector: '.title_wrapper a:nth-child(7)',
        type: 'text'
      },
      rating: {
        selector: 'span[itemprop="ratingValue"]',
        type: 'text'
      },
      ratingCount: {
        selector: 'span[itemprop="ratingCount"]',
        type: 'text'
      }
    },
    ...opts
  })

  if (result.data.rating) result.data.rating += ' of 10'
  if (result.data.release) result.data.release = result.data.release.trim()
  if (result.data.duration) result.data.duration = result.data.duration.trim()
  return result
}

module.exports.meta = {
  name: 'IMDb',
  examples: ['https://www.imdb.com/title/tt1853728/']
}
