const joi = require('joi');

const id = joi.string().uuid();
const userName = joi.string().min(4).max(20);
const email = joi.string().email();
const password = joi.string().min(8);
const role = joi.string().min(4).max(15);

const createUserSchema = joi.object({
  userName: userName.required(),
  email: email.required(),
  password: password.required(),
  role: role.required(),
});

const getUserSchema = joi.object({
  id: id.required(),
});

const updateUserSchema = joi.object({
  userName,
  email,
  password,
  role,
});

module.exports = {
  createUserSchema,
  getUserSchema,
  updateUserSchema,
};
