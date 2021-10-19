const baseURL = "http://157.201.228.93:2992/";
let products = [];

function convertToJson(res) {
    if (res.ok) {
        return res.json();
    } else {
        throw new Error("Bad Response");
    }
}

export default class ProductData {
    constructor() {}


    // get tents data
    getData() {
        return fetch(baseURL + `products/search/${category}`)
            .then(convertToJson)
            .then((data) => data.Result);
    }

    async findProductById(id) {
        const product = await this.getData();
        return products.find((item) => item.id === id);
    }
}