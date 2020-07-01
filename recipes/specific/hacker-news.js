const mql = require('@microlink/mql')

module.exports = opts =>
  mql('https://news.ycombinator.com', {
    data: {
      posts: {
        selectorAll: '.athing',
        attr: {
          title: {
            type: 'title',
            selector: '.storylink',
            attr: 'text'
          },
          url: {
            type: 'url',
            selector: '.storylink',
            attr: 'href'
          }
        }
      }
    },
    ...opts
  })
