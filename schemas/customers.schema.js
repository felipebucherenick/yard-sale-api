const joi = require('joi');

const id = joi.string().uuid();
const firstName = joi.string().max(20);
const lastName = joi.string().max(30);
const address = joi.string().min(5).max(50);
const phoneNumber = joi.string();

const createCustomerSchema = joi.object({
  firstName: firstName.required(),
  lastName: lastName.required(),
  address: address.required(),
  phoneNumber: phoneNumber.require(),
});

const getCustomerSchema = joi.object({
  id: id.required(),
});

const updateCustomerSchema = joi.object({
  firstName,
  lastName,
  address,
  phoneNumber,
});

module.exports = {
  createCustomerSchema,
  getCustomerSchema,
  updateCustomerSchema,
};
