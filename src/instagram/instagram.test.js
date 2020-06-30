'use strict'

const test = require('ava')
const ow = require('ow')

const instagram = require('./instagram')

const apiKey = process.env.MICROLINK_API_KEY

test('Instagram', async t => {
  const { data } = await instagram('willsmith', { apiKey })

  t.true(ow.isValid(data.avatar, ow.object.not.empty))
})
