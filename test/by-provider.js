'use strict'

const { default: ow } = require('ow')
const test = require('ava')

const {
  betalist,
  canopy,
  codepen,
  coolmod,
  fca,
  github,
  google,
  hackerNews,
  imdb,
  instagram,
  meetup,
  produchunt,
  reddit,
  soundcloud,
  telegram,
  twitter,
  wipoid,
  youtube,
  spotify
} = require('../by-provider')

const apiKey = process.env.MICROLINK_API_KEY

test('betalist', async t => {
  const { data } = await betalist(betalist.meta.examples[0], { apiKey })

  data.startups.forEach(startup => {
    t.true(ow.isValid(startup.name, ow.string.not.empty))
    t.true(ow.isValid(startup.url, ow.string.not.empty))
    t.true(ow.isValid(startup.description, ow.string.not.empty))
    t.true(ow.isValid(startup.image, ow.string.not.empty))
  })
})

test('twitter', async t => {
  const { data } = await twitter(twitter.meta.examples[0], { apiKey })

  data.latestTweets.forEach(tweet => {
    t.true(ow.isValid(tweet.content, ow.string.not.empty))
    t.true(ow.isValid(tweet.link, ow.string.not.empty))
  })

  t.true(ow.isValid(data.stats.followers, ow.number.finite))
  t.true(ow.isValid(data.stats.followings, ow.number.finite))
  t.true(ow.isValid(data.stats.tweets, ow.number.finite))
})

test('produchunt', async t => {
  const { data } = await produchunt(produchunt.meta.examples[0], { apiKey })

  t.true(ow.isValid(data.name, ow.string.not.empty))
  t.true(ow.isValid(data.upvotes, ow.string.not.empty))
})

test('wipoid', async t => {
  const { data } = await wipoid(wipoid.meta.examples[0], { apiKey })

  t.true(ow.isValid(data.price, ow.number.finite))
})

test('meetup', async t => {
  const { data } = await meetup(meetup.meta.examples[0], { apiKey })
  t.true(ow.isValid(data.members, ow.string.not.empty))

  data.pastEvents.forEach(post => {
    t.true(ow.isValid(post.attendees, ow.string.not.empty))
    t.true(ow.isValid(post.link, ow.string.not.empty))
    t.true(ow.isValid(post.title, ow.string.not.empty))
  })
})

test('instagram', async t => {
  const { data } = await instagram(instagram.meta.examples[0], { apiKey })
  t.true(ow.isValid(data.avatar, ow.object.not.empty))
  t.true(ow.isValid(data.stats, ow.object.not.empty))
})

test('hacker-news', async t => {
  const { data } = await hackerNews({ apiKey })

  data.posts.forEach(post => {
    t.true(ow.isValid(post.title, ow.string.not.empty))
    t.true(ow.isValid(post.url, ow.string.not.empty))
  })
})

test('github', async t => {
  const { data } = await github(github.meta.examples[0], { apiKey })

  t.true(ow.isValid(data.stats.followers, ow.number.finite))
  t.true(ow.isValid(data.stats.following, ow.number.finite))
  t.true(ow.isValid(data.stats.stars, ow.number.finite))
})

test('coolmod', async t => {
  const { data } = await coolmod(coolmod.meta.examples[0], { apiKey })

  t.true(ow.isValid(data.price, ow.string.not.empty))
  t.true(ow.isValid(data.image, ow.object.not.empty))
})

test('google', async t => {
  const { data } = await google(google.meta.examples[0], { apiKey })

  data.results.forEach(result => {
    t.true(ow.isValid(result.title, ow.string.not.empty))
    t.true(ow.isValid(result.description, ow.string.not.empty))
    t.true(ow.isValid(result.breadcumb, ow.string.not.empty))
    t.true(ow.isValid(result.link, ow.string.not.empty))
  })
})

test('imdb', async t => {
  const { data } = await imdb(imdb.meta.examples[0], { apiKey })

  t.true(ow.isValid(data.director, ow.string.not.empty))
  t.true(ow.isValid(data.writer, ow.string.not.empty))
  t.true(ow.isValid(data.duration, ow.string.not.empty))
  t.true(ow.isValid(data.year, ow.number.finite))
  t.true(ow.isValid(data.rating, ow.string.not.empty))
  t.true(ow.isValid(data.ratingCount, ow.string.not.empty))
})

test('fca', async t => {
  const { data } = await fca(fca.meta.examples[0], { apiKey })

  t.true(ow.isValid(data.url, ow.string.not.empty))
  t.true(ow.isValid(data.name, ow.string.not.empty))
  t.true(ow.isValid(data.updatedAt, ow.string.not.empty))
  t.true(ow.isValid(data.address, ow.string.not.empty))
  t.true(ow.isValid(data.firmReferenceNumber, ow.number.finite))
  t.true(ow.isValid(data.registeredCompanyNumber, ow.number.finite))
  t.true(ow.isValid(data.email, ow.string.not.empty))
  t.true(ow.isValid(data.phone, ow.string.not.empty))
})

test('canopy', async t => {
  const { data } = await canopy(canopy.meta.examples[0], { apiKey })

  data.products.forEach(result => {
    t.true(ow.isValid(result.title, ow.string.not.empty))
    t.true(ow.isValid(result.url, ow.string.not.empty))
    t.true(ow.isValid(result.amazonUrl, ow.string.not.empty))
    t.true(ow.isValid(result.image, ow.string.not.empty))
  })
})

test('codepen', async t => {
  const screenshotUrl = await codepen(codepen.meta.examples[0], { apiKey })
  t.true(ow.isValid(screenshotUrl, ow.string.not.empty))
})

test('telegram', async t => {
  const { data } = await telegram(telegram.meta.examples[0], { apiKey })
  t.true(ow.isValid(data.subscribers, ow.number.finite))
  t.true(ow.isValid(data.photos, ow.number.finite))
  t.true(ow.isValid(data.links, ow.string.not.empty))
})

test('reddit', async t => {
  const { data } = await reddit(reddit.meta.examples[0], { apiKey })
  t.true(ow.isValid(data.karma, ow.number.finite))
  t.true(ow.isValid(data.birthday, ow.string.not.empty))
  t.true(ow.isValid(data.avatar, ow.object.not.empty))
})

test('youtube', async t => {
  const { data } = await youtube(youtube.meta.examples[0], { apiKey })
  t.true(ow.isValid(data.views, ow.number.finite))
  t.true(ow.isValid(data.video, ow.object.not.empty))
  t.true(ow.isValid(data.audio, ow.object.not.empty))
})

test('soundcloud', async t => {
  const { data } = await soundcloud(soundcloud.meta.examples[0], { apiKey })
  t.true(ow.isValid(data.views, ow.number.finite))
  t.true(ow.isValid(data.audio, ow.object.not.empty))
})

test('spotify', async t => {
  const { data } = await spotify(spotify.meta.examples[0], { apiKey })
  t.true(ow.isValid(data.audio, ow.object.not.empty))
})
