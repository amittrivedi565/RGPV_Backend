const db = require('../models')
const Branch = require('../models/branches.models')


const homepageGet = async (req, res) => {
  const locals = {
    title: "Welcome To RGPV Vault!",
  };
  res.render("../views/home", { locals });
};

const sampleData = async (req, res) => {
  try {
    const info = {
      title: req.body.title,
    }
    const data = await Todo.create(info);
    console.log(data);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  homepageGet,
};
