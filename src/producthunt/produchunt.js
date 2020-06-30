'use strict'

const mql = require('@microlink/mql')

module.exports = (postId, opts) =>
  mql(`https://www.producthunt.com/posts/${postId}`, {
    data: {
      name: {
        selector: 'h1 a',
        attr: 'text',
        type: 'string'
      },
      upvotes: {
        selector: '.bigButtonCount_10448',
        attr: 'text',
        type: 'string'
      }
    },
    ...opts
  })
