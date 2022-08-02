const express = require('express');

const router = express.Router();

//Get all products
router.get('/', (req, res) => {
  res.json({ msg: 'hi' });
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

module.exports = router;
