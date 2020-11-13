const Users = require("../models/userModel");
const bcrypt = require("bcrypt");

const userController = {
  register: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const user = await Users.findOne({ email });
      if (user)
        return res
          .status(400)
          .json({ msg: "User with given email already exists" });

      if (password.length < 8)
        return res
          .status(400)
          .json({ msg: "password should be atleast 8 characters" });

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new Users({
        name: name,
        email: email,
        password: hashedPassword,
      });
      await newUser.save();
      return res.json({ msg: "Successfully registered" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

module.exports = userController;
