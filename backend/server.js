//Import Mongoose
const mongoose = require('mongoose');

//import express
const express = require('express');

//import dotenv environment
require('dotenv').config();

//Express app instance
const app = express();

//Import from routers folder
const productRoutes = require('./routes/products');

//Middleware
//parse data from api
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//Routes
app.use('/api/products', productRoutes);

//Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //Server waiting
    app.listen(process.env.PORT, () => {
      console.log('Connected to db & waiting on', process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
