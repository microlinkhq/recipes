const mql = require('@microlink/mql')

module.exports = (url, opts) =>
  mql(url, {
    prerender: true,
    data: {
      products: {
        selectorAll: '.product-card',
        attr: {
          title: {
            type: 'title',
            selector: '.product-details-name',
            attr: 'text'
          },
          url: {
            type: 'url',
            selector: '.product-link-tracking',
            attr: 'href'
          },
          amazonUrl: {
            type: 'url',
            selector: '.card-buy-button',
            attr: 'href'
          },
          image: {
            type: 'img',
            selector: '.product-card-image img',
            attr: 'src'
          },
          brand: {
            type: 'title',
            selector: '.product-details-brand',
            attr: 'text'
          }
        }
      }
    },
    click: '.LoadMoreButton',
    ...opts
  })

module.exports.meta = {
  name: 'Canocopy',
  examples: ['https://canopy.co/shop/everyday-carry']
}
