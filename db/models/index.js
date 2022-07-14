const { Products, ProductsSchema } = require('./products.model');

function setupModels(sequelize) {
  Products.init(ProductsSchema, Products.config(sequelize));
}

module.exports = setupModels;
