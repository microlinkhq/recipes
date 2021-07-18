'use strict'

const mql = require('@microlink/mql')

module.exports = async (url, opts) => {
  const result = await mql(url, {
    data: {
      subscribers: {
        selector: '.tgme_channel_info_counter:nth-child(1) .counter_value'
      },
      photos: {
        selector: '.tgme_channel_info_counter:nth-child(2) .counter_value'
      },
      links: {
        selector: '.tgme_channel_info_counter:nth-child(3) .counter_value'
      }
    },
    ...opts
  })

  return result
}

module.exports.meta = {
  name: 'Telegram',
  examples: ['https://telegram.me/s/teslahunt']
}
