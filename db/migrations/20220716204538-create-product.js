'use strict';
const { ProductsSchema, PRODUCTS_TABLE } = require('../models/products.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(PRODUCTS_TABLE, ProductsSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(PRODUCTS_TABLE);
  },
};
