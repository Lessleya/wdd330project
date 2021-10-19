import { getParams } from "./utils";
import ProductData from "./productData.js";
import ProductDetails from './productDetails.js';

function setLocalStorage(t, e) {
    localStorage.setItem(t, JSON.stringify(e));
}

getProductsData(),
    document.getElementById("addToCart").addEventListener("click", addToCart);

const dataSource = new ProductData("tents");

const productId = getParams("product");

console.log(dataSource.findProductById(productId));

const product = new ProductDetails(productId, dataSource);
product.init();
