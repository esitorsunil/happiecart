const express = require("express");
const app = express();

const products = require("./routes/product");

//middleware
app.use("/api/v1/", products);

module.exports = app;