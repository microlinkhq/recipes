'use strict'

const mql = require('@microlink/mql')

module.exports = (url, opts) =>
  mql(url, {
    data: {
      song: {
        selector: 'h4[data-e2e="video-music"]',
        attr: 'text',
        type: 'string'
      },
      likeCount: {
        selector: 'strong[data-e2e="like-count"]',
        attr: 'text',
        type: 'string'
      },
      commentCount: {
        selector: 'strong[data-e2e="comment-count"]',
        attr: 'text',
        type: 'string'
      },
      shareCount: {
        selector: 'strong[data-e2e="share-count"]',
        attr: 'text',
        type: 'string'
      }
    },
    ...opts
  })

module.exports.meta = {
  name: 'TikTok',
  examples: ['https://www.tiktok.com/@willsmith/video/7064624682766503214']
}
