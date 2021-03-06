const { Products, ProductsSchema } = require('./products.model');
const { Users, UsersSchema } = require('./users.model');
const { Categories, CategoriesSchema } = require('./categories.model');
const { Customers, CustomersSchema } = require('./customers.model');

function setupModels(sequelize) {
  Products.init(ProductsSchema, Products.config(sequelize));
  Users.init(UsersSchema, Users.config(sequelize));
  Categories.init(CategoriesSchema, Categories.config(sequelize));
  Customers.init(CustomersSchema, Customers.config(sequelize));
}

module.exports = setupModels;
