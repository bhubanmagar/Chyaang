const getAllProducts = async (req, res) => {
  const mongoose = require("mongoose");

  const product = mongoose.model("products");
  const getProducts = await product.find();
  if (getProducts) {
    try {
      res.send({ products: getProducts });
    } catch (error) {
      res.send(error.message);
    }
  }
};

module.exports = getAllProducts;
