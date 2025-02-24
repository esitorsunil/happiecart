const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");

const products = require("./routes/product");

app.use(express.json());
//middleware
app.use("/api/v1/", products);

app.use(errorMiddleware);
module.exports = app;