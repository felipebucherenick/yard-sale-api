const joi = require('joi');

const id = joi.string().uuid();
const title = joi.string().min(4).max(15);
const description = joi.string().min(5).max(50);
const image = joi.string();

const createCategorySchema = joi.object({
  title: title.required(),
  description: description.required(),
  image: image.required(),
});

const getCategorySchema = joi.object({
  id: id.required(),
});

const updateCategorySchema = joi.object({
  title,
  description,
  image,
});

module.exports = {
  createCategorySchema,
  getCategorySchema,
  updateCategorySchema,
};
