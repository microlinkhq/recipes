'use strict'

const mql = require('@microlink/mql')

module.exports = (url, opts) =>
  mql(url, {
    data: {
      price: {
        selector: '#precio-main',
        attr: 'data-price',
        type: 'number'
      },
      image: {
        selector: '.pc-com-zoom.img-fluid',
        attr: 'src',
        type: 'url'
      }
    },
    ...opts
  })

module.exports.meta = {
  name: 'PcComponentes',
  examples: ['https://www.pccomponentes.com/msi-mag-b550-tomahawk']
}
