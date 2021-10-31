const mql = require('@microlink/mql')

module.exports = (url, opts) =>
  mql(url, {
    data: {
      price: {
        selector: 'meta[name="twitter:data1"]',
        attr: 'content'
      },
      color: {
        selector: 'meta[name="twitter:data2"]',
        attr: 'content'
      }
    },
    ...opts
  })

module.exports.meta = {
  name: 'Zalando',
  examples: [
    'https://www.zalando.es/jordan-air-jordan-1-mid-zapatillas-altas-joc12n001-g11.html'
  ]
}
