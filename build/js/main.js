import { doc } from "prettier";
import ProductData from "./productData";
import ProductListing from "./productList";
import { loadHeaderFooter } from "./utils";

const listElement = document.querySelector(".product-list")

const productData = new ProductData("tents");
const productListing = new ProductListing ("tents", productData)