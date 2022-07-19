const express = require('express');
const CustomersService = require('../services/customers.service');
const validatorHandler = require('../middlewares/validator.handler');
const {
  createCustomeerSchema,
  getCustomerSchema,
  updateCustomerSchema,
} = require('../schemas/customers.schema');

const router = express.Router();
const service = new CustomersService();

router.post(
  '/',
  validatorHandler(createCustomeerSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCustomer = await service.create(body);
      res.status(201).json(newCustomer);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/', async (req, res, next) => {
  try {
    const customers = await service.findAll();
    res.status(200).json(customers);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  validatorHandler(getCustomerSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const customer = await service.findOne(id);
      res.status(200).json(customer);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/:id',
  validatorHandler(getCustomerSchema, 'params'),
  validatorHandler(updateCustomerSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const updatedCustomer = await service.update(id, body);
      res.status(200).json(updatedCustomer);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(getCustomerSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const deletedCustomer = await service.delete(id);
      res.status(200).json(deletedCustomer);
    } catch (error) {
      next(error);
    }
  }
);
