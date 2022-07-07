const router = require("express").Router();
const { authUser, authAdmin } = require("../middleware/auth");
const User = require("../model/User");
router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Login User
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByCredentials(email, password);
    if(!user){
      res.status(200).json({message:"Email not register"});
    }
    const token = await user.generateAuthToken();
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json(error.message);
  }
});

//  Logout User

router.post("/logout", authUser, async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email });
    const token = user.tokens.filter(function (item) {
      return item.token !== req.token;
    });
    user.tokens = token;
    await user.save();
    res.status(200).json({ data: "Log out from system" });
  } catch (e) {
    res.status(400).json(e.message);
  }
});
// Forgot password 
router.post("/forgotpassword", async (req, res) => {
  try {
    const user = await User.findOne({ mobile: req.body.mobile });
    user.password =  req.body.password;
    await user.save();
    res.status(200).json({code :200,message:"Password Updated Successfully"});
  } catch(error) {
    res.status(400).json({code :400,message:"User Not found"});
  }
});
router.post("/deleteAdmin", authUser, async (req, res) => {
  try {
    const Res = await User.deleteOne({ email: req.body.email });
    res.status(200).send(Res);
  } catch (e) {
    console.log(e);
    res.status(400).json(e.message);
  }
});

// get all admin
router.get("/alladmin", authAdmin, async (req, res) => {
  try {
    const user = await User.find({ role: "admin" });
    res.status(201).send(user);
  } catch (e) {
    res.status(201).send(e.message);
  }
});
//Log in through Mobile using otp
router.post("/loginotp", async (req, res) => {
  const { mobile } = req.body;
  try {
    const user = await User.findByMobile(mobile);
    if(!user){
      res.status(200).json({message:"Mobile not registered"});
    }
    const token = await user.generateAuthToken();
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = router;
