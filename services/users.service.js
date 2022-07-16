const boom = require('@hapi/boom');
const models = require('../libs/sequelize');

class UsersService {
  constructor() {}

  async create(body) {
    const newProduct = await models.Users.create(body);
    return newProduct;
  }

  async findAll() {
    const users = await models.Users.findAll();
    return users;
  }

  async findOne(id) {
    const user = await models.Users.finByPk(id);
    if (!user) {
      throw boom.notFound('User not found');
    }
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const updatedUser = await user.update(changes);
    return updatedUser;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return user;
  }
}

module.exports = UsersService;
