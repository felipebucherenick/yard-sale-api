const express = require('express');

const router = express.Router();
const ProductsService = require('../services/products.service');
const {
  createProductSchema,
  getProductSchema,
  updateProductSchema,
} = require('../schemas/products.schema');
const validatorHandler = require('../middlewares/validator.handler');

const service = new ProductsService();

router.post(
  '/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newProduct = await service.create(body);
      res.status(201).json(newProduct);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/', async (req, res, next) => {
  try {
    const products = await service.findAll();
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const productChanges = await service.update(id, body);
      res.status(200).json(productChanges);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const deletedProduct = await service.delete(id);
      res.status(200).json(deletedProduct);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
