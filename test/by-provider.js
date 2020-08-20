'use strict'

const test = require('ava')
const ow = require('ow')

const {
  coolmod,
  github,
  google,
  hackerNews,
  imdb,
  instagram,
  meetup,
  pccomponentes,
  produchunt,
  twitter,
  wipoid
} = require('../by-provider')

const apiKey = process.env.MICROLINK_API_KEY

test('twitter', async t => {
  const { data } = await twitter(twitter.meta.examples[0], { apiKey })

  t.true(ow.isValid(data.stats.followers, ow.number.finite))
  t.true(ow.isValid(data.stats.followings, ow.number.finite))
  t.true(ow.isValid(data.stats.tweets, ow.number.finite))
})

test('produchunt', async t => {
  const { data } = await produchunt(produchunt.meta.examples[0], { apiKey })

  t.true(ow.isValid(data.name, ow.string.not.empty))
  t.true(ow.isValid(data.upvotes, ow.string.not.empty))
})

test('pccomponentes', async t => {
  const { data } = await pccomponentes(pccomponentes.meta.examples[0], {
    apiKey
  })

  t.true(ow.isValid(data.price, ow.number.finite))
  t.true(ow.isValid(data.image, ow.object.not.empty))
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
  t.true(ow.isValid(data.release, ow.string.not.empty))
  t.true(ow.isValid(data.rating, ow.string.not.empty))
  t.true(ow.isValid(data.ratingCount, ow.string.not.empty))
})
