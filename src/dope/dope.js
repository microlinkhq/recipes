const mql = require('@microlink/mql')

const { data } = await mql('https://www.dope.com/products/navigator-shorts', {
  force: true,
  rules: {
    productTitle: {
      selector:
        '#MainContent > div > div.grid.product-single > div:nth-child(3) > h1'
    },
    productPrice: {
      selector: '#ProductPrice:first'
    },
    productDescription: {
      selector: '.shipping-and-return-wrapper:first',
      attr: 'text'
    },
    colorVariants: {
      selector: '#productSelect-option-0 option'
    },
    sizeVariants: {
      selector: '#productSelect-option-1 option'
    },
    productImages: {
      selector: 'a.product-single__thumbnail img',
      attr: 'src'
    }
  }
})
console.log(`data`, data)
