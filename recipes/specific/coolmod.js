const mql = require('@microlink/mql')

module.exports = async (slug, opts) => {
  const result = await mql(`https://www.coolmod.com/${slug}`, {
    data: {
      price: {
        selector: '.container-price-total',
        attr: 'text'
      },
      image: {
        selector: '#_image2',
        attr: 'src',
        type: 'url'
      }
    },
    ...opts
  })

  result.data.price = result.data.price.trim()

  return result
}
