
import ProductData from './productData'
import ProductListing from './productList'

const tents = new ProductData('tents')

const listElement = document.querySelector('.product-list');

const tentsList = new ProductListing ('tents',tents, listElement)

tentsList.init()

