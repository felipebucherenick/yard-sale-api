const { Products, ProductsSchema } = require('./products.model');
const { Users, UsersSchema } = require('./users.models');

function setupModels(sequelize) {
  Products.init(ProductsSchema, Products.config(sequelize));
  Users.init(UsersSchema, Users.config(sequelize));
}

module.exports = setupModels;
