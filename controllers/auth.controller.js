const db = require('../models/index')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "NOTESAPI";

const signUp = async (req, res) => {
  const { name, pswd } = req.body;

  try {
    const existingUser = await db.admins.findOne({ name: name });
    if (existingUser) {
      return res.status(400).json({ message: "User Already Exists" });
    }

    const hashedPassword = await bcrypt.hash(pswd, 10);

    const result = await db.admins.create({
      name: name,
      pswd: hashedPassword
    });

    const token = jwt.sign({ name: result.name, id: result._id }, SECRET_KEY);
    res.status(201).json({ user: result, token: token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something Went Wrong" });
  }
};

const signIn = async (req, res) => {
  const { name, pswd } = req.body;
  try {
    const existingUser = await db.admins.findOne({ name: name });
    if (!existingUser) {
      return res.status(404).json({ message: "User not found!" });
    }

    const matchPassword = await bcrypt.compare(pswd, existingUser.pswd);
    {
      if (!matchPassword) {
        return res.status(404).json({ message: "Invalid credentionals" });
      }
      const token = jwt.sign(
        { name: existingUser.name, id: existingUser._id },
        SECRET_KEY
      );
      res.status(201).json({ user: existingUser, token: token });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something Went Wrong" });
  }
};

module.exports = { signIn, signUp };
