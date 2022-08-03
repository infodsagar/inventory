//Import express
const express = require('express');

//Router instance
const router = express.Router();

//Import model
const Product = require('../models/productModel');

//Get all products
router.get('/', (req, res) => {
  res.json({ msg: 'Get all products' });
});

//Get a single product
router.get('/:id', (req, res) => {
  res.json({ msg: 'hi single' });
});

//Add product
router.post('/', async (req, res) => {
  const { title, desc, qty, price } = req.body;

  try {
    const product = await Product.create({ title, desc, qty, price });
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }

  res.json({ msg: 'hi add' });
});

//Delete product
router.delete('/:id', (req, res) => {
  res.json({ msg: 'hi delete' });
});

//Patch product
router.patch('/:id', (req, res) => {
  res.json({ msg: 'add qty' });
});

module.exports = router;
