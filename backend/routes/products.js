//Import express
const express = require('express');

//Router instance
const router = express.Router();

//Import model
const Product = require('../models/productModel');

//Import controller func
const {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
} = require('../controllers/productController');

//Get all products
router.get('/', getProducts);

//Get a single product
router.get('/:id', getProduct);

//Add product
router.post('/', createProduct);

//Delete product
router.delete('/:id', deleteProduct);

//Patch product
router.patch('/:id', updateProduct);

module.exports = router;
