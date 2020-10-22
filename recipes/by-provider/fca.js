'use strict'

const mql = require('@microlink/mql')

module.exports = async (url, opts) => {
  const result = await mql(url, {
    waitForSelector: 'h1',
    meta: false,
    prerender: true,
    data: {
      name: {
        selector: 'h1'
      },
      updatedAt: {
        attr: 'text',
        selector:
          '#who-is-this-details-content > div.stack.stack--direct.stack--medium > div.accordion__text > div > p:nth-child(2)'
      },
      address: {
        selector:
          '#who-is-this-details-content > div.stack.stack--direct.stack--medium > div.slds-grid.slds-wrap.gutters-large.gutters-medium_none > div.slds-col.slds-size_1-of-1.slds-medium-size_6-of-12.slds-p-around_none.slds-p-right_small > div > div > div:nth-child(1) > p',
        attr: 'text'
      },
      firmReferenceNumber: {
        type: 'number',
        selector:
          '#who-is-this-details-content > div.stack.stack--direct.stack--medium > div.slds-grid.slds-wrap.gutters-large.gutters-medium_none > div:nth-child(2) > div > div > div:nth-child(2) > p'
      },
      registeredCompanyNumber: {
        type: 'number',
        selector:
          '#who-is-this-details-content > div.stack.stack--direct.stack--medium > div.slds-grid.slds-wrap.gutters-large.gutters-medium_none > div:nth-child(2) > div > div > div:nth-child(3) > p'
      },
      email: {
        selector:
          '#who-is-this-details-content > div.stack.stack--direct.stack--medium > div.slds-grid.slds-wrap.gutters-large.gutters-medium_none > div.slds-col.slds-size_1-of-1.slds-medium-size_6-of-12.slds-p-around_none.slds-p-right_small > div > div > div:nth-child(3) > p'
      },
      phone: {
        type: 'text',
        selector:
          '#who-is-this-details-content > div.stack.stack--direct.stack--medium > div.slds-grid.slds-wrap.gutters-large.gutters-medium_none > div.slds-col.slds-size_1-of-1.slds-medium-size_6-of-12.slds-p-around_none.slds-p-right_small > div > div > div:nth-child(2) > p'
      },
      website: {
        type: 'url',
        selector:
          '#who-is-this-details-content > div.stack.stack--direct.stack--medium > div.slds-grid.slds-wrap.gutters-large.gutters-medium_none > div.slds-col.slds-size_1-of-1.slds-medium-size_6-of-12.slds-p-around_none.slds-p-right_small > div > div > div:nth-child(4) > a'
      }
    },
    ...opts
  })

  if (result.data.updatedAt) {
    result.data.updatedAt = result.data.updatedAt.split(':')[1].trim()
  }

  return result
}

module.exports.meta = {
  name: 'Financial Conduct Authority',
  examples: ['https://register.fca.org.uk/s/firm?id=001b000000NMdXdAAL']
}
