const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  users: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model("users", userSchema);
