import { renderListWithTemplate } from "./utils";

export default class ProductListing {
    constructor(category, dataSource, listElement) {
        // We passed in this information to make our class as reusable as possible.
        // Being able to define these things when we use the class will make it very flexible
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }
    async init() {
        // our dataSource will return a Promise...so we can use await to resolve it.
        const list = await this.dataSource.getData();
        // render the list 
    }
    renderList(list) {
        const template = document.getElementById('product-card-template');
        this.listElement.innerHTML = "";
        const filteredList = list.filter(
            (item) => item.Id !== "989CG" && item.id !== "880RT"
        );
        renderListWithTemplate(
            template, this.listElement, filteredList, this.prepareTemplate
        );


    }
    prepareTemplate(template, product) {

        template.querySelector('a').href += product.Id;
        template.querySelector('img').src = product.Image;
        template.querySelector('h3').textContent = product.Brand.Name;
        template.querySelector('h2').textContent = product.Name;
        template.querySelector('p').textContent += product.FinalPrice;

        // fill in the rest of the data here... 
        return template;
    }
}