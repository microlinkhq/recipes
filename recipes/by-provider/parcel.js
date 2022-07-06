'use strict'

const mql = require('@microlink/mql')

module.exports = async (url, opts) => {
  const { data } = await mql(url.endsWith('/raw') ? url : `${url}/raw`, {
    meta: false,
    screenshot: true,
    device: 'iPhone X',
    ...opts
  })

  return data.screenshot.url
}

module.exports.meta = {
  name: 'Parcel',
  examples: ['https://parcel.io/e/bfb95111-317b-4615-8b46-9e9bb6d9d365']
}
