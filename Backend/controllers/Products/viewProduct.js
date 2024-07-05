const mongoose = require("mongoose");
const viewProduct = async (req, res) => {
  const product = mongoose.model("products");
  const getID = req.params.id;
  try {
    const getProduct = await product.findById({
      _id: getID,
    });
    if (getProduct) {
      res.send({
        productDetails: getProduct,
      });
    }
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = viewProduct;
