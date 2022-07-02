const express = require('express');

const router = express.Router();
const ProductsService = require('../services/products.service');

const service = new ProductsService();

router.post('/', async (req, res, next) => {
  try {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
  } catch (err) {
    next(err);
  }
});

router.get('/', async (req, res, next) => {
  try {
    const products = await service.findAll();
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.finOne(id);
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
});

router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const productChanges = await service.update(id, body);
    res.status(200).json(productChanges);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedProduct = await service.delete(id);
    res.status(200).json(deletedProduct);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
