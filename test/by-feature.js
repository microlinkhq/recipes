'use strict'

const test = require('ava')
const { default: ow } = require('ow')

const {
  debugCss,
  fullyScreenshot,
  getFavicon,
  getHtml,
  getImages,
  jsonLd,
  lighthouseReport,
  technologyStack,
  universalEmbed
} = require('../by-feature')

const apiKey = process.env.MICROLINK_API_KEY

for (const url of universalEmbed.meta.examples) {
  test(`universal embed for ${url}`, async t => {
    const iframe = await universalEmbed(url, { apiKey })
    t.true(ow.isValid(iframe, ow.object.not.empty))
    t.true(ow.isValid(iframe.html, ow.string.not.empty))
    t.true(iframe.html.includes('width="350"'), url)
  })
}

test('technology stack', async t => {
  const technologies = await technologyStack(technologyStack.meta.examples[0], {
    apiKey
  })
  t.true(ow.isValid(technologies, ow.object.not.empty))
})

test('lighthouse report', async t => {
  const report = await lighthouseReport(lighthouseReport.meta.examples[0], {
    apiKey
  })
  t.true(ow.isValid(report, ow.object.not.empty))
})

test('get html', async t => {
  const html = await getHtml(getHtml.meta.examples[0], { apiKey })
  t.true(html.startsWith('<!DOCTYPE'))
})

test('get favicon', async t => {
  const faviconUrl = await getFavicon(getFavicon.meta.examples[0], { apiKey })
  t.true(!!faviconUrl)
})

test('get images', async t => {
  const images = await getImages(getImages.meta.examples[0], { apiKey })

  images.forEach(image => {
    t.true(ow.isValid(image.url, ow.string.not.empty))
    t.true(ow.isValid(image.type, ow.string.not.empty))
    t.true(ow.isValid(image.size, ow.number.finite))
    t.true(ow.isValid(image.size_pretty, ow.string.not.empty))
  })
})

test('fully screenshot', async t => {
  const screenshot = await fullyScreenshot(fullyScreenshot.meta.examples[0], {
    apiKey
  })
  t.true(ow.isValid(screenshot, ow.object.not.empty))
})

test('debug css', async t => {
  const screenshot = await debugCss(debugCss.meta.examples[0], { apiKey })
  t.true(ow.isValid(screenshot, ow.object.not.empty))
})

test('retrieve JSON+lD', async t => {
  const data = await jsonLd(jsonLd.meta.examples[0], { apiKey })
  t.true(ow.isValid(data, ow.array.not.empty))
})
