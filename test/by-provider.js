'use strict'

const test = require('ava')
const ow = require('ow')

const {
  pccomponentes,
  hackerNews,
  produchunt,
  instagram,
  coolmod,
  twitter,
  meetup,
  github,
  wipoid
} = require('../by-provider')

const apiKey = process.env.MICROLINK_API_KEY

test('twitter', async t => {
  const { data } = await twitter(twitter.info.examples[0], { apiKey })

  t.true(ow.isValid(data.stats.followers, ow.number.finite))
  t.true(ow.isValid(data.stats.followings, ow.number.finite))
  t.true(ow.isValid(data.stats.tweets, ow.number.finite))
})

test('produchunt', async t => {
  const { data } = await produchunt(produchunt.info.examples[0], { apiKey })

  t.true(ow.isValid(data.name, ow.string.not.empty))
  t.true(ow.isValid(data.upvotes, ow.string.not.empty))
})

test('pccomponentes', async t => {
  const { data } = await pccomponentes(pccomponentes.info.examples[0], {
    apiKey
  })

  t.true(ow.isValid(data.price, ow.number.finite))
  t.true(ow.isValid(data.image, ow.object.not.empty))
})

test('wipoid', async t => {
  const { data } = await wipoid(wipoid.info.examples[0], { apiKey })

  t.true(ow.isValid(data.price, ow.number.finite))
})

test('meetup', async t => {
  const { data } = await meetup(meetup.info.examples[0], { apiKey })

  t.true(ow.isValid(data.members, ow.string.not.empty))

  data.pastEvents.forEach(post => {
    t.true(ow.isValid(post.attendees, ow.string.not.empty))
    t.true(ow.isValid(post.link, ow.string.not.empty))
    t.true(ow.isValid(post.title, ow.string.not.empty))
  })
})

test('instagram', async t => {
  const { data } = await instagram(instagram.info.examples[0], { apiKey })
  t.true(ow.isValid(data.avatar, ow.object.not.empty))
  t.true(ow.isValid(data.photos, ow.object.not.empty))
})

test('hacker-news', async t => {
  const { data } = await hackerNews({ apiKey })

  data.posts.forEach(post => {
    t.true(ow.isValid(post.title, ow.string.not.empty))
    t.true(ow.isValid(post.url, ow.string.not.empty))
  })
})

test('github', async t => {
  const { data } = await github(github.info.examples[0], { apiKey })

  t.true(ow.isValid(data.stats.followers, ow.number.finite))
  t.true(ow.isValid(data.stats.following, ow.number.finite))
  t.true(ow.isValid(data.stats.stars, ow.number.finite))
})

test('coolmod', async t => {
  const { data } = await coolmod(coolmod.info.examples[0], { apiKey })

  t.true(ow.isValid(data.price, ow.string.not.empty))
  t.true(ow.isValid(data.image, ow.object.not.empty))
})
