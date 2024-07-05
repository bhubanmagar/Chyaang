const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    imageSrc: {
      type: String,
      require: true,
      default: "https://autobe.in/wp-content/uploads/2023/09/Dummy-Product.jpg",
    },
    imageAlt: {
      type: String,
      default: "Product",
    },
    price: {
      type: String,
      default: "$0",
    },
    category: {
      type: String,
    },
    Rating: {
      type: Number,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const productModel = mongoose.model("products", productSchema);

module.exports = productModel;
