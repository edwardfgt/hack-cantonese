const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { collection: "user-data" }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
