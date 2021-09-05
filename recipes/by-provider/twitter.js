'use strict'

const mql = require('@microlink/mql')

module.exports = async (url, opts) => {
  const result = await mql(url, {
    data: {
      latestTweets: {
        selectorAll: 'div[lang]',
        attr: 'text'
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
      }
    },
    prerender: true,
    waitForSelector: 'div[lang]',
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
