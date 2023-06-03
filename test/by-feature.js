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
  headings,
  healthcheck,
  html,
  images,
  jsonLd,
  lighthouse,
  pdf,
  screenshot,
  technologyStack,
  uris,
  youtubeDl
} = require('../by-feature')

const apiKey = process.env.MICROLINK_API_KEY

for (const url of embed.meta.examples) {
  test(`.embed for ${url}`, async t => {
    const iframe = await embed(url, { apiKey })
    t.true(ow.isValid(iframe, ow.object.not.empty))
    t.true(ow.isValid(iframe.html, ow.string.not.empty))
    t.true(iframe.html.includes('width="350"'), url)
  })
}

test('.technologyStack', async t => {
  const technologies = await technologyStack(technologyStack.meta.examples[0], {
    apiKey
  })
  t.true(ow.isValid(technologies, ow.object.not.empty))
})

test('.lighthouse', async t => {
  const report = await lighthouse(lighthouse.meta.examples[0], {
    apiKey
  })
  t.true(ow.isValid(report, ow.object.not.empty))
})

test('.html', async t => {
  const renderedHtml = await html(html.meta.examples[0], { apiKey })
  t.true(renderedHtml.startsWith('<!DOCTYPE'))
})

test('.excerpt', async t => {
  const { value } = await excerpt(excerpt.meta.examples[0], { apiKey })
  t.true(ow.isValid(value, ow.string.not.empty))
})

test('.emails', async t => {
  const allEmails = await emails(emails.meta.examples[0], { apiKey })
  t.true(ow.isValid(allEmails, ow.array.not.empty))
})

test('.favicon', async t => {
  const faviconUrl = await favicon(favicon.meta.examples[0], { apiKey })
  t.true(!!faviconUrl)
})

test('.images', async t => {
  const allImages = await images(images.meta.examples[0], { apiKey })

  allImages.forEach(image => {
    t.true(ow.isValid(image.url, ow.string.not.empty))
    t.true(ow.isValid(image.type, ow.string.not.empty))
    t.true(ow.isValid(image.size, ow.number.finite))
    t.true(ow.isValid(image.size_pretty, ow.string.not.empty))
  })
})

test('.headings', async t => {
  const { url, ...allHeaders } = await headings(headings.meta.examples[0], {
    apiKey
  })

  Object.entries(allHeaders)
    .filter(([, values]) => Array.isArray(values))
    .forEach(([, values]) => {
      t.true(ow.isValid(values, ow.array.not.empty))
    })
})

test('.pdf', async t => {
  const asset = await pdf(pdf.meta.examples[0], {
    apiKey
  })
  t.true(ow.isValid(asset, ow.object.not.empty))
})

test('.screenshot', async t => {
  const image = await screenshot(screenshot.meta.examples[0], {
    apiKey
  })
  t.true(ow.isValid(image, ow.object.not.empty))
})

test('.fullScreenshot', async t => {
  const image = await fullScreenshot(fullScreenshot.meta.examples[0], {
    apiKey
  })
  t.true(ow.isValid(image, ow.object.not.empty))
})

test('.debugCss', async t => {
  const screenshot = await debugCss(debugCss.meta.examples[0], { apiKey })
  t.true(ow.isValid(screenshot, ow.object.not.empty))
})

test('.jsonLd', async t => {
  const data = await jsonLd(jsonLd.meta.examples[0], { apiKey })
  t.true(ow.isValid(data, ow.array.not.empty))
})

test('.healthcheck', async t => {
  const { value } = await healthcheck(healthcheck.meta.examples[0], { apiKey })
  t.true(ow.isValid(value.url, ow.string.not.empty))
  t.true(ow.isValid(value.statusCode, ow.number.finite))
  t.true(ow.isValid(value.headers, ow.object.not.empty))
  t.true(ow.isValid(value.html, ow.string.not.empty))
})

test('.youtubeDl', async t => {
  const { value } = await youtubeDl(youtubeDl.meta.examples[0], { apiKey })
  t.true(ow.isValid(value, ow.object.not.empty))
})

test('.uris', async t => {
  const { value } = await uris(uris.meta.examples[0], { apiKey })
  t.true(ow.isValid(value, ow.array.not.empty))
})
