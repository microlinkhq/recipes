'use strict'

const test = require('ava')
const ow = require('ow')

const twitter = require('./twitter')

const apiKey = process.env.MICROLINK_API_KEY

test('Twitter', async t => {
  const { data } = await twitter('kikobeats', { apiKey })

  t.true(ow.isValid(data.stats.followers, ow.number.finite))
  t.true(ow.isValid(data.stats.followings, ow.number.finite))
  t.true(ow.isValid(data.stats.tweets, ow.number.finite))
})
