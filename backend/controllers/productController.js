//Import product model
const Product = require('../models/productModel');

//Import Mongoose
const mongoose = require('mongoose');

//Get all products
const getProducts = async (req, res) => {
  const products = await Product.find({}).sort({ createdAt: -1 });
  res.status(200).json(products);
};

//Get a single product
const getProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such product' });
  }

  const product = await Product.findById(id);

  if (!product) {
    return res.status(404).json({ error: 'No product found' });
  }

  res.status(200).json(product);
};

//Add new product
const createProduct = async (req, res) => {
  const { title, desc, qty, price } = req.body;

  try {
    const product = await Product.create({ title, desc, qty, price });
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

//Delete product
const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such product' });
  }

  const product = await Product.findOneAndDelete({ _id: id });

  if (!product) {
    res.status(404).json({ error: 'No such product' });
  }

  res.status(200).json(product);
};

//Patch qty
const updateProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such product' });
  }

  const product = await Product.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!product) {
    res.status(404).json({ error: 'No such product' });
  }

  res.status(200).json(product);
};

module.exports = {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
};
