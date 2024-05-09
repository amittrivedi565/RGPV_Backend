
const db = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_KEY = "VAULT";


// User login



const signInGet = async (req,res)=>
  {
  try {
    res.render("../views/signin")
  } catch (error) {
    console.log(error)
  }
}

const signInPost =  async (req, res) => {
try {
const { name, pswd } = req.body;
const user = await db.admins.findOne({ name : name });
if (!user) {
return res.status(401).json({ error: 'Authentication failed' });
}
const passwordMatch = await bcrypt.compare(pswd, user.pswd);
if (!passwordMatch) {
return res.status(401).json({ error: 'Authentication failed' });
}
const token = jwt.sign({ userId: user._id }, SECRET_KEY, {
expiresIn: '1h',
});
res.render("../views/admin")
} catch (error) {
res.status(500).json({ error: 'Login failed' });
}
};

module.exports = {
  signInGet , signInPost
}




























