'use strict'

const microlink = require('@microlink/function')

const code = `async ({ query, page, response }) => ({
  url: response && response.url(),
  statusCode: response && response.status(),
  headers: response && response.headers(),
  html: await page.content(),
  statusCode: response && response.status()
})`

module.exports = microlink(code)
module.exports.code = code
module.exports.meta = {
  name: 'Healthcheck',
  description: 'A simple way to check if an URL is reachable',
  examples: ['https://deno.com']
}
