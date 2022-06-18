const mongoose = require("mongoose");
require('dotenv').config()
mongoose.connect("mongodb://localhost:27017/MBDAS")
.then(console.log("connected to Database"))
.catch((err) => console.log(err));

module.exports = mongoose;