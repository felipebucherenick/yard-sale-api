const boom = require('@hapi/boom');
/* const faker = require('faker');
 */
class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    for (let i = 0; i < 5; i++) {
      this.products.push({
        id: 123,
        name: 'producto',
        price: 34,
        image: 'imagen',
      });
    }
  }

  create(body) {
    const newProduct = {
      id: faker.datatype().uuid(),
      ...body,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  findAll() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
      }, 3000);
    });
  }

  finOne(id) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw boom.notFound('Product not found');
    }
    return product;
  }

  update(id, changes) {
    const product = this.finOne(id);
    const index = this.products.findIndex((product) => product.id === id);
    this.products[index] = {
      ...this.products[index],
      ...changes,
    };
    return [product, this.products[index]];
  }

  delete(id) {
    const product = this.finOne(id);
    const index = this.products.findIndex((product) => product.id === id);
    this.products.splice(index, 1);
    return product;
  }
}

module.exports = ProductsService;
