const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class ProductsService {
  constructor() {}

  async create(body) {
    const newProduct = await models.Products.create(body);
    return newProduct;
  }

  async findAll() {
    const products = await models.Products.findAll();
    return products;
  }

  async findOne(id) {
    const product = await models.Products.findByPk(id);
    if (!product) {
      throw boom.notFound('Product not found');
    }
    return product;
  }

  async update(id, changes) {
    const product = await this.findOne(id);
    const updatedProduct = await product.update(changes);
    return updatedProduct;
  }

  async delete(id) {
    const product = await this.findOne(id);
    await product.destroy();
    return product;
  }
}

module.exports = ProductsService;
