const { faker } = require('@faker-js/faker');

class ProductsServices {

    constructor() {
        this.products = [];
        this.create();
    }

    create() {
        const limit = 150
        for(let i = 0; i < limit; i++){
            this.products.push({
                id: faker.datatype.uuid(),
                name: faker.commerce.productName(),
                price: parseInt(faker.commerce.price(), 10),
                image: faker.image.urlLoremFlickr()
            });
        }
    }

    findAll() {
        return this.products;
    }

    findOne(id) {
        return this.products.find(item => item.id === id);
    }

    update() {

    }

    delete() {

    }
}

module.exports = ProductsServices;
