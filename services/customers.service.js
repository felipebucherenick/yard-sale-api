const boom = require('@hapi/boom');
const models = require('../libs/sequelize');

class CustomersService {
  constructor() {}

  async create() {
    const newCustomer = await models.Customers.create();
    return newCustomer;
  }

  async findAll() {
    const customers = await models.Customers.findAll();
    return customers;
  }

  async findOne(id) {
    const customer = await models.Customers.findByPk(id);
    if (!customer) {
      throw boom.notFound('Customer not found');
    }
    return customer;
  }

  async update(id, changes) {
    const customer = await this.findOne(id);
    const updatedCustomer = await customer.update(changes);
    return updatedCustomer;
  }

  async delete(id) {
    const customer = await this.findOne(id);
    await customer.destroy();
    return customer;
  }
}

module.exports = CustomersService;
