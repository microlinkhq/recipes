'use strict'

const test = require('ava')
const ow = require('ow')

const {
  fullPageScreenshot,
  getHtml,
  lighthouseReport,
  technologyStack,
  universalEmbed
} = require('../by-feature')

const apiKey = process.env.MICROLINK_API_KEY

test('universal embed', async t => {
  for (const url of universalEmbed.meta.examples) {
    const iframe = await universalEmbed(url, { apiKey })
    t.true(ow.isValid(iframe, ow.object.not.empty), url)
    t.true(ow.isValid(iframe.html, ow.string.not.empty), url)
    t.true(iframe.html.includes('width="350"'), url)
  }
})

test('technology stack', async t => {
  const technologies = await technologyStack(technologyStack.meta.examples[0])
  t.true(ow.isValid(technologies, ow.object.not.empty))
})

test('lighthouse report', async t => {
  const report = await lighthouseReport(lighthouseReport.meta.examples[0])
  t.true(ow.isValid(report, ow.object.not.empty))
})

test('get html', async t => {
  const html = await getHtml(getHtml.meta.examples[0])
  t.true(html.startsWith('<!DOCTYPE'))
})

test('full page screenshot', async t => {
  const screenshot = await fullPageScreenshot(
    fullPageScreenshot.meta.examples[0]
  )
  t.true(ow.isValid(screenshot, ow.object.not.empty))
})
