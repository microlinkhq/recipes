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
          retweets: {
            selector: 'a[href*="retweets"] span span span:nth(0)',
            attr: 'text'
          },
          quoteRetweets: {
            selector: 'a[href*="retweets"] span span span:nth(1)',
            attr: 'text'
          },
          likes: {
            selector: 'a[href*="likes"] span span span',
            attr: 'text'
          },
          tweetDate: {
            selector: 'a[href*="status"] time',
            type: 'text'
          },
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
  examples: [
    'https://twitter.com/microlinkhq',
    'https://twitter.com/AREdotNA/status/1424776632695414786'
  ]
}
