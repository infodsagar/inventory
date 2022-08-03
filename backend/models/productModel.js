//Import mongoose
const mongoose = require('mongoose');

//Assign schema func to schema
const Schema = mongoose.Schema;

//Create schema instance and define data structure
const productSchema = new Schema(
  {
    title: {
      type: String,
    },
    desc: { type: String, required: true },
    qty: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
