'use strict'

const test = require('ava')
const ow = require('ow')

const productHunt = require('./produchunt')

const apiKey = process.env.MICROLINK_API_KEY

test('ProductHunt', async t => {
  const { data } = await productHunt('microlink-2-0', { apiKey })

  t.true(ow.isValid(data.name, ow.string.not.empty))
  t.true(ow.isValid(data.upvotes, ow.string.not.empty))
})
