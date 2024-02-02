const { expect } = require("chai");
const supertest = require("supertest");

import app from "../index";
const request = supertest(app);

describe("Product API Tests", () => {
  let productId;
  let variantId;

  it("should create a new product with variants", async () => {
    const productData = {
      name: "Test Product",
      description: "Test description",
      price: 19.99,
      variants: [
        { name: "Variant 1", sku: "VAR1", additionalCost: 5, stockCount: 20 },
        { name: "Variant 2", sku: "VAR2", additionalCost: 3, stockCount: 15 },
      ],
    };

    const response = await request.post("/api/products/po").send(productData);
    expect(response.status).to.equal(200);
    expect(response.body.product).to.have.property("_id");
    expect(response.body.variants).to.be.an("array");
    productId = response.body.product._id;
    variantId = response.body.variants[0]._id;
  });

  it("should update the product and its variants", async () => {
    const updatedData = {
      name: "Updated Test Product",
      description: "Updated description",
      price: 29.99,
      variants: [
        {
          _id: variantId,
          name: "Updated Variant 1",
          additionalCost: 8,
          stockCount: 25,
        },
        {
          name: "New Variant",
          sku: "NEWVAR",
          additionalCost: 7,
          stockCount: 30,
        },
      ],
    };

    const response = await request
      .put(`/api/products/${productId}`)
      .send(updatedData);
    expect(response.status).to.equal(200);
    expect(response.body.product.name).to.equal(updatedData.name);
    expect(response.body.product.variants).to.have.lengthOf(3);
    // 😂
  });

  it("should delete the product and its variants", async () => {
    const response = await request.delete(`/api/products/${productId}`);
    expect(response.status).to.equal(200);
    expect(response.body.message).to.equal(
      "Product and variants deleted successfully"
    );
  });

  it("should search for products based on the query", async () => {
    const response = await request.get("/api/products/search?query=Test");
    expect(response.status).to.equal(200);
    expect(response.body).to.be.an("array");
  });
});
