// const mongoose = require("mongoose");

// const ProductvarientSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   sku: { type: String, required: true },
//   additionalCost: { type: Number, default: 0 },
//   stockCount: { type: Number, default: 0 },
// });

// const Productvarient = mongoose.model("Productvarient", ProductvarientSchema);
// module.exports = { Productvarient };

// const mongoose = require("mongoose");

// const ProductvarientSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   sku: { type: String, required: true },
//   additionalCost: { type: Number, default: 0 },
//   stockCount: { type: Number, default: 0 },
// });

// const ProductVariant = mongoose.model("Productvariant", ProductvarientSchema);
// module.exports = { ProductVariant };

const mongoose = require("mongoose");

const ProductvarientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sku: { type: String, required: true },
  additionalCost: { type: Number, default: 0 },
  stockCount: { type: Number, default: 0 },
});

const ProductVariant = mongoose.model("ProductVariant", ProductvarientSchema);
module.exports = { ProductVariant };
