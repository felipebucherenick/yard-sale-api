const joi = require('joi');

const id = joi.string().uuid();
const name = joi.string().min(5).max(30);
const price = joi.number().integer();
const image = joi.string();

const createProductSchema = joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required(),
});

const getProductSchema = joi.object({
  id: id.required(),
});

const updateProductSchema = joi.object({
  name,
  price,
  image,
});

module.exports = { createProductSchema, getProductSchema, updateProductSchema };
