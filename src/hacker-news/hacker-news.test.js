'use strict'

const test = require('ava')
const ow = require('ow')

const hackerNews = require('./hacker-news')

const apiKey = process.env.MICROLINK_API_KEY

test('Hacker News', async t => {
  const { data } = await hackerNews({ apiKey })

  data.posts.forEach(post => {
    t.true(ow.isValid(post.title, ow.string.not.empty))
    t.true(ow.isValid(post.url, ow.string.not.empty))
  })
})
