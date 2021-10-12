import ProductData from './productData.js';
import ProductDetails from './productDetails.js'
import {getParams} from './utils.js'

const dataSource = new ProductData('tents');
console.log(dataSource.getData());

const product = getParams('product')
console.log(product);
const productDetails = new ProductDetails(product,dataSource)
productDetails.init()

function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}


// or should we do it this way?
// async function getProductsDataAwait() {
//   products = await fetch("../json/tents.json").then(convertToJson);
// }

// add to cart button event handler
function addToCart(e) {
  const product = products.find((item) => item.Id === e.target.dataset.id);
  setLocalStorage("so-cart", product);
}

