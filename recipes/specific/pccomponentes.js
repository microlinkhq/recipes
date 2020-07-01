const mql = require('@microlink/mql')

module.exports = (slug, opts) =>
  mql(`https://www.pccomponentes.com/${slug}`, {
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
