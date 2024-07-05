const loginHandler = async (req, res) => {
  const mongoose = require("mongoose");
  const bcrypt = require("bcrypt");
  const User = mongoose.model("user");

  const { email, password } = req.body;

  const findUser = await User.findOne({
    email: email,
  });
  if (!findUser) {
    return res.status(400).json({
      message: "user doesnot exist! please signup first",
    });
  }
  const verify = await bcrypt.compare(password, findUser.password);
  if (verify) {
    return res.status(200).json({
      message: "login sucessfully",
    });
  } else {
    return res.status(400).json({
      message: "user or password doesn't match",
    });
  }
};

module.exports = loginHandler;
