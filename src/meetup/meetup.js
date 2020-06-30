'use strict'

const mql = require('@microlink/mql')

module.exports = async (slug, opts) =>
  mql(`https://www.meetup.com/${slug}/`, {
    adblock: false,
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
