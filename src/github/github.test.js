'use strict'

const test = require('ava')
const ow = require('ow')

const gitHub = require('./github')

const apiKey = process.env.MICROLINK_API_KEY

test('GitHub', async t => {
  const { data } = await gitHub('kikobeats', { apiKey })

  t.true(ow.isValid(data.stats.followers, ow.number.finite))
  t.true(ow.isValid(data.stats.following, ow.number.finite))
  t.true(ow.isValid(data.stats.stars, ow.number.finite))
})
