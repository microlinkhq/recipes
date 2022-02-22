'use strict'

const test = require('ava')
const { default: ow } = require('ow')

const {
  debugCss,
  emails,
  embed,
  excerpt,
  favicon,
  fullScreenshot,
  healthcheck,
  html,
  images,
  jsonLd,
  lighthouse,
  pdf,
  screenshot,
  technologyStack
} = require('../by-feature')

const apiKey = process.env.MICROLINK_API_KEY

for (const url of embed.meta.examples) {
  test(`universal embed for ${url}`, async t => {
    const iframe = await embed(url, { apiKey })
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

test('lighthouse', async t => {
  const report = await lighthouse(lighthouse.meta.examples[0], {
    apiKey
  })
  t.true(ow.isValid(report, ow.object.not.empty))
})

test('get html', async t => {
  const renderedHtml = await html(html.meta.examples[0], { apiKey })
  t.true(renderedHtml.startsWith('<!DOCTYPE'))
})

test('get excerpt', async t => {
  const { value } = await excerpt(excerpt.meta.examples[0], { apiKey })
  t.true(ow.isValid(value, ow.string.not.empty))
})

test('get emails', async t => {
  const allEmails = await emails(emails.meta.examples[0], { apiKey })
  t.true(ow.isValid(allEmails, ow.array.not.empty))
})

test('get favicon', async t => {
  const faviconUrl = await favicon(favicon.meta.examples[0], { apiKey })
  t.true(!!faviconUrl)
})

test('get images', async t => {
  const allImages = await images(images.meta.examples[0], { apiKey })

  allImages.forEach(image => {
    t.true(ow.isValid(image.url, ow.string.not.empty))
    t.true(ow.isValid(image.type, ow.string.not.empty))
    t.true(ow.isValid(image.size, ow.number.finite))
    t.true(ow.isValid(image.size_pretty, ow.string.not.empty))
  })
})

test('pdf', async t => {
  const asset = await pdf(pdf.meta.examples[0], {
    apiKey
  })
  t.true(ow.isValid(asset, ow.object.not.empty))
})

test('screenshot', async t => {
  const image = await screenshot(screenshot.meta.examples[0], {
    apiKey
  })
  t.true(ow.isValid(image, ow.object.not.empty))
})

test('full screenshot', async t => {
  const image = await fullScreenshot(fullScreenshot.meta.examples[0], {
    apiKey
  })
  t.true(ow.isValid(image, ow.object.not.empty))
})

test('debug css', async t => {
  const screenshot = await debugCss(debugCss.meta.examples[0], { apiKey })
  t.true(ow.isValid(screenshot, ow.object.not.empty))
})

test('retrieve JSON+lD', async t => {
  const data = await jsonLd(jsonLd.meta.examples[0], { apiKey })
  t.true(ow.isValid(data, ow.array.not.empty))
})

test('healthcheck', async t => {
  const { value } = await healthcheck(healthcheck.meta.examples[0], { apiKey })
  t.true(ow.isValid(value.url, ow.string.not.empty))
  t.true(ow.isValid(value.statusCode, ow.number.finite))
  t.true(ow.isValid(value.headers, ow.object.not.empty))
  t.true(ow.isValid(value.html, ow.string.not.empty))
})
