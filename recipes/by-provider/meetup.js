'use strict'

const mql = require('@microlink/mql')

module.exports = async (url, opts) =>
  mql(url, {
    data: {
      members: {
        selector: '.groupHomeHeaderInfo-memberLink span',
        type: 'text'
      },
      pastEvents: {
        selectorAll: '.eventCard',
        attr: {
          title: {
            selector: '.eventCardHead--title'
          },
          link: {
            selector: '.eventCard--link',
            attr: 'href',
            type: 'url'
          },
          attendees: {
            selector: '.avatarRow--attendingCount span'
          }
        }
      }
    },
    ...opts
  })

module.exports.info = {
  name: 'Meetup',
  examples: ['https://www.meetup.com/Alicante-Frontend/']
}
