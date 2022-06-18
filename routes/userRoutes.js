const router = require("express").Router();
const {authUser} = require("../middleware/auth");
const User = require("../model/User");
router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).send(user);
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
});

// Login User
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByCredentials(email, password);
    const token = await user.generateAuthToken();
    res.json({ user, token });
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
});

//  Logout User

router.delete("/logout",authUser, async(req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((tokenObj) => {
      return tokenObj.token !== req.token;
    })
    await req.user.save();
    res.status(200).send("Log out from system");
  } catch (e) {
    res.status(400).json(e.message);
  }
})
module.exports = router;
