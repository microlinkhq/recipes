'use strict'

const mql = require('@microlink/mql')

module.exports = async (url, opts) => {
  const result = await mql(url, {
    data: {
      banner: {
        selector: 'main a[href$="header_photo"] img',
        attr: 'src',
        type: 'image'
      },
      stats: {
        selector: 'main',
        attr: {
          tweets: {
            selector: 'div > div > div > div h2 + div'
          },
          followings: {
            selector: 'a[href*="following"] span span'
          },
          followers: {
            selector: 'a[href*="followers"] span span'
          }
        }
      },
      latestTweets: {
        selectorAll: 'main article',
        attr: {
          content: {
            selector: 'div[lang]',
            attr: 'text'
          },
          link: {
            selector: 'a',
            attr: 'href'
          }
        }
      }
    },
    prerender: true,
    waitForSelector: 'main article',
    ...opts
  })

  if (result.data.stats.tweets) {
    result.data.stats.tweets = Number(
      result.data.stats.tweets.replace(' Tweets', '')
    )
  }

  return result
}

module.exports.meta = {
  name: 'Twitter',
  examples: ['https://twitter.com/microlinkhq']
}
