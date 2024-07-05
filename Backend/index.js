const express = require("express");
const Routes = require("./Routes/Routes");
const app = express();
app.use(express.json());
require("dotenv").config();
app.use(express.urlencoded({ extended: false })); //form data or different types of dat handeling

//model creation and database connection
require("./middleware/db-con");
require("./models/userModel");
require("./models/productModel");

//Routing
app.use("/", Routes);

const Port = process.env.PORT || 8000;
app.listen(Port, () => {
  console.log(`server started at port ${Port}`);
});
