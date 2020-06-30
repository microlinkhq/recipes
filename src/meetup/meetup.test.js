'use strict'

const test = require('ava')
const ow = require('ow')

const meetup = require('./meetup')

const apiKey = process.env.MICROLINK_API_KEY

test('Meetup', async t => {
  const { data } = await meetup('Alicante-Frontend', { apiKey })

  t.true(ow.isValid(data.members, ow.string.not.empty))

  data.pastEvents.forEach(post => {
    t.true(ow.isValid(post.attendees, ow.string.not.empty))
    t.true(ow.isValid(post.link, ow.string.not.empty))
    t.true(ow.isValid(post.title, ow.string.not.empty))
  })
})
