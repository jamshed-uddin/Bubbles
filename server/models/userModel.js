const mongoose = require("mongoose");

const userModel = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timeStamps: true }
);

const User = mongoose.model("User", userModel);
module.exports = User;
