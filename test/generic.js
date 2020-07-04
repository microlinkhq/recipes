'use strict'

const demoLinks = require('@microlink/demo-links')
const importModules = require('import-modules')
const test = require('ava')
const ow = require('ow')

const { lighthouse, technologyStack, universalEmbed } = importModules(
  '../recipes/generic'
)

const apiKey = process.env.MICROLINK_API_KEY

test('universal embed', async t => {
  const urls = [
    demoLinks.YouTube.url,
    demoLinks.Vimeo.url,
    demoLinks.SoundCloud.url,
    demoLinks.Twitter.url
  ]

  for (const url of urls) {
    const { data } = await universalEmbed(url, { apiKey })
    t.true(ow.isValid(data.iframe, ow.object.not.empty), url)
    t.true(ow.isValid(data.iframe.html, ow.string.not.empty), url)
    t.true(data.iframe.html.includes('width="350"'), url)
  }
})

test('technology stack', async t => {
  const { data } = await technologyStack('https://microlink.io')
  t.true(ow.isValid(data.insights.technologies, ow.object.not.empty))
})

test('lighthouse', async t => {
  const { data } = await lighthouse('https://microlink.io')
  t.true(ow.isValid(data.insights.lighthouse, ow.object.not.empty))
})
