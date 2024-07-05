const userRegister = async (req, res) => {
  const mongoose = require("mongoose");
  const bcrypt = require("bcrypt");
  const { name, email, password } = req.body;
  const User = mongoose.model("user");

  if (!name || !email || !password) {
    return res.status(400).json({
      message: "field can't be empty",
    });
  }

  //duplicate checking of email
  const findUser = await User.findOne({
    email: email,
  });
  if (findUser) {
    return res
      .status(400)
      .json({ message: "user with this email already exist" });
  }

  //inserting data to database
  const encPassword = await bcrypt.hash(password, 10);
  try {
    const response = await User.create({
      userName: name,
      email: email,
      password: encPassword,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }

  res.status(200).json({
    message: "Registered sucessfully",
  });
};
module.exports = userRegister;
