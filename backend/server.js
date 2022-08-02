require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const productsRoutes = require('./routes/products');

//app
const app = express();

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//route
app.use('/api/products', productsRoutes);

//Connect to DB
mongoose
  .connect(process.env.MONGO_UI)
  .then(() => {
    //Server listen req
    app.listen(process.env.PORT, () => {
      console.log('waiting ');
    });
  })
  .catch((err) => {
    console.log(err);
  });
