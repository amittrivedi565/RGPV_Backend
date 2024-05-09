const router = require("express").Router();
const { signin } = require("../controllers/auth.controller");

router.post("/login", signin.validator, signin.controller);

module.exports = router;