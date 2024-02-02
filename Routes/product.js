const express = require("express");
const router = express.Router();

const Product = require("../Schemas/Productschema").Product;

const ProductVariant = require("../Schemas/Productvarient").ProductVariant;
router.post("/po", async (req, res) => {
  try {
    const { name, description, price, variants } = req.body;

    const product = await Product.create({ name, description, price });

    const createdVariants = await Promise.all(
      variants.map(async (variantData) => {
        const variant = await ProductVariant.create(variantData);
        product.variants.push(variant);
        return variant;
      })
    );

    await product.save();

    res.json({ product, variants: createdVariants });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:productId", async (req, res) => {
  try {
    const { productId } = req.params;
    const { name, description, price, variants } = req.body;

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    product.name = name;
    product.description = description;
    product.price = price;

    const updatedVariants = await Promise.all(
      variants.map(async (variantData) => {
        if (variantData._id) {
          const updatedVariant = await ProductVariant.findByIdAndUpdate(
            variantData._id,
            variantData,
            { new: true }
          );
          return updatedVariant;
        } else {
          const newVariant = await ProductVariant.create(variantData);
          product.variants.push(newVariant);
          return newVariant;
        }
      })
    );

    await product.save();

    res.json({ product, variants: updatedVariants });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:productId", async (req, res) => {
  try {
    const { productId } = req.params;

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    await ProductVariant.deleteMany({ _id: { $in: product.variants } });

    await Product.findByIdAndDelete(productId);

    res.json({ message: "Product and variants deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/search", async (req, res) => {
  try {
    const { query } = req.query;
    const products = await Product.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
        { "variants.name": { $regex: query, $options: "i" } },
      ],
    }).populate({
      path: "variants",
      model: "ProductVariant",
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
