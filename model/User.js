const mongoose = require("mongoose");
const connection = require("../connection");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: [true, "Email ID of user should be unique."],
    required: [true, "Email ID of user is required."],
  },
  password: {
    type: String,
    required: [true, "Password of user is required."],
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  role: {
    type: String,
    required: true,
  },
  govtid: {
    type: String,
    unique: [true, "Admin ID of admin should be unique."],
  },
});
userSchema.pre("save", function (next) {
  var salt = bcrypt.genSaltSync(10);
  if (this.password && this.isModified("password")) {
    this.password = bcrypt.hashSync(this.password, salt);
  }
  next();
});
userSchema.methods.generateAuthToken = async function () {
  let params = {
    _id: this._id,
    email: this.email,
    firstname: this.firstname,
    lastname: this.lastname,
    role: this.role,
    govtid: this.govtid,
  };
  const key = process.env.SECRETKEY;
  var tokenValue = jwt.sign(params, key);
  this.tokens = this.tokens.concat({ token: tokenValue });
  await this.save();
  return tokenValue;
};

userSchema.statics.findByCredentials = async function (email, password) {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid Email or Password");
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid Email or Password");
  }
  return user;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
