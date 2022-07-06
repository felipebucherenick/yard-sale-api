const boom = require('@hapi/boom');
const { faker } = require('@faker-js/faker');
const pool = require('../libs/postgres');

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
    this.pool = pool;
    this.pool.on('error', (err) => console.log(err));
  }

  generate() {
    for (let i = 0; i < 5; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        description: faker.commerce.productDescription(),
        image: faker.image.imageUrl(),
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

  async findAll() {
    const query = 'SELECT * FROM tasks';
    const response = await this.pool.query(query);
    return response.rows;
    /* return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
      }, 3000);
    }); */
  }

  findOne(id) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw boom.notFound('Product not found');
    }
    return product;
  }

  update(id, changes) {
    const product = this.findOne(id);
    const index = this.products.findIndex((product) => product.id === id);
    this.products[index] = {
      ...this.products[index],
      ...changes,
    };
    return [product, this.products[index]];
  }

  delete(id) {
    const product = this.findOne(id);
    const index = this.products.findIndex((product) => product.id === id);
    this.products.splice(index, 1);
    return product;
  }
}

module.exports = ProductsService;
