//Import express
const express = require('express');

//Router instance
const router = express.Router();

//Get all products
router.get('/', (req, res) => {
  res.json({ msg: 'Get all products' });
});

//Get a single product
router.get('/:id', (req, res) => {
  res.json({ msg: 'hi single' });
});

//Add product
router.post('/', (req, res) => {
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
