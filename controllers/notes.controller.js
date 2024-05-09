const db = require("../models");
const Branch = require("../models/branches.models");

const homepageGet = {
    controller: async (req, res) => {
        const locals = {
            title: "Welcome To RGPV Vault!",
        };
        res.render("../views/home", { locals });
    },
};

module.exports = {
    homepageGet,
};
