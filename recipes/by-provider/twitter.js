'use strict'

const mql = require('@microlink/mql')

module.exports = async (url, opts) => {
  const result = await mql(url, {
    data: {
      latestTweets: {
        selectorAll:
          'main > div > div > div > div > div > div:nth-child(2) > div > div > div article > div > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)',
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
