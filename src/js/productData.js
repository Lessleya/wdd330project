let products = [];


function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

  export default class ProductData{
      constructor(category){
          this.category = category;
          this.path = `../json/${this.category}.json`;
      }

// get tents data
      getData(){
        fetch (this.path)
        .then(convertToJson).then((data) => {
          products = data;
        });
      }

      async findProductById(id){
        const product = await this.getData()
        return products.find ((item) => item.id === id);
      }
  } 
