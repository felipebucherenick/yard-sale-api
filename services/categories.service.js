const boom = require('@hapi/boom');
const models = require('../libs/sequelize');

class CategoriesService {
  constructor() {}

  async create() {
    const newCategory = await models.Categories.create();
    return newCategory;
  }

  async findAll() {
    const categories = await models.Categories.findAll();
    return categories;
  }

  async findOne(id) {
    const category = await models.Categories.findByPk(id);
    if (!category) {
      throw boom.notFound('Category not found');
    }
    return category;
  }

  async update(id, changes) {
    const category = await this.findOne(id);
    const updatedCategory = await category.update(changes);
    return updatedCategory;
  }

  async delete(id) {
    const category = await this.findOne(id);
    await category.destroy();
    return category;
  }
}

module.exports = CategoriesService;
