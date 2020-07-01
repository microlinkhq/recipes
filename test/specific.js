'use strict'

const test = require('ava')
const ow = require('ow')

const pccomponentes = require('../recipes/specific/pccomponentes')
const hackerNews = require('../recipes/specific/hacker-news')
const productHunt = require('../recipes/specific/produchunt')
const instagram = require('../recipes/specific/instagram')
const coolmod = require('../recipes/specific/coolmod')
const twitter = require('../recipes/specific/twitter')
const meetup = require('../recipes/specific/meetup')
const gitHub = require('../recipes/specific/github')
const wipoid = require('../recipes/specific/wipoid')

const apiKey = process.env.MICROLINK_API_KEY

test('twitter', async t => {
  const { data } = await twitter('kikobeats', { apiKey })

  t.true(ow.isValid(data.stats.followers, ow.number.finite))
  t.true(ow.isValid(data.stats.followings, ow.number.finite))
  t.true(ow.isValid(data.stats.tweets, ow.number.finite))
})

test('producthunt', async t => {
  const { data } = await productHunt('microlink-2-0', { apiKey })

  t.true(ow.isValid(data.name, ow.string.not.empty))
  t.true(ow.isValid(data.upvotes, ow.string.not.empty))
})

test('pccomponentes', async t => {
  const { data } = await pccomponentes('msi-mag-b550-tomahawk', { apiKey })

  t.true(ow.isValid(data.price, ow.number.finite))
  t.true(ow.isValid(data.image, ow.object.not.empty))
})

test('wipoid', async t => {
  const { data } = await wipoid('msi-mag-b550m-mortar-wifi', { apiKey })

  t.true(ow.isValid(data.price, ow.number.finite))
})

test('meetup', async t => {
  const { data } = await meetup('Alicante-Frontend', { apiKey })

  t.true(ow.isValid(data.members, ow.string.not.empty))

  data.pastEvents.forEach(post => {
    t.true(ow.isValid(post.attendees, ow.string.not.empty))
    t.true(ow.isValid(post.link, ow.string.not.empty))
    t.true(ow.isValid(post.title, ow.string.not.empty))
  })
})

test('instagram', async t => {
  const { data } = await instagram('willsmith', { apiKey })

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
  const { data } = await gitHub('kikobeats', { apiKey })

  t.true(ow.isValid(data.stats.followers, ow.number.finite))
  t.true(ow.isValid(data.stats.following, ow.number.finite))
  t.true(ow.isValid(data.stats.stars, ow.number.finite))
})

test('coolmod', async t => {
  const { data } = await coolmod(
    'msi-mag-b550-tomahawk-socket-am4-placa-base-precio',
    { apiKey }
  )

  t.true(ow.isValid(data.price, ow.string.not.empty))
  t.true(ow.isValid(data.image, ow.object.not.empty))
})
