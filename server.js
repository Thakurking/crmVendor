/*******************MODULES******************/
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
/*******************************************/

/********************DATABSE CONNECTION*************************/
mongoose.connect("mongodb://localhost/crmDB", {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
/***************************************************************/

const index = require("./routes/index");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static("public"));
app.use("/", index);

/*********************SERVER CONNECTION************************/
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server Started On ${PORT}`);
});
/**************************************************************/
