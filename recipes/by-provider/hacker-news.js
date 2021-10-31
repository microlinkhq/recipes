'use strict'

const mql = require('@microlink/mql')

module.exports = opts =>
  mql('https://news.ycombinator.com', {
    data: {
      posts: {
        selectorAll: '.athing',
        attr: {
          title: {
            type: 'title',
            selector: '.titlelink',
            attr: 'text'
          },
          url: {
            type: 'url',
            selector: '.titlelink',
            attr: 'href'
          }
        }
      }
    },
    ...opts
  })

module.exports.meta = {
  name: 'Hacker News',
  examples: ['https://news.ycombinator.com']
}
