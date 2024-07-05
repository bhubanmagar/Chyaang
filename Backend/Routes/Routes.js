const express = require("express");
const Route = express.Router();
const userRegister = require("../controllers/userRegister/userRegister");
const loginHandler = require("../controllers/loginHandler/loginHandler");
const viewProduct = require("../controllers/Products/viewProduct");
const getAllProducts = require("../controllers/Products/getProducts");

Route.get("/view-Product/:id", viewProduct);
Route.get("/allProducts", getAllProducts);
Route.post("/userRegister", userRegister);
Route.post("/userLogin", loginHandler);

module.exports = Route;
