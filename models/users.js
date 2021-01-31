/***************MODULES***************/
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
/*************************************/

//#region User Schema
const userSchema = new Schema({
  users: [
    {
      type: String,
    },
  ],
});
//#endregion

module.exports = mongoose.model("users", userSchema);
