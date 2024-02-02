const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = 3000;
mongoose.connect(
  "mongodb+srv://ashish077:ashish077@cluster0.ukddhfw.mongodb.net/"
);
app.use(express.json());
const Products = require("./Routes/product");

app.use("/api/products", Products);

app.listen(PORT, function () {
  console.log(`server listening on port ${PORT}`);
});

module.exports = app;
