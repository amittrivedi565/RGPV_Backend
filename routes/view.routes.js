const router = require("express").Router();
const { homepageGet } = require("../controllers/notes.controller");

router.get("/", homepageGet.controller);

module.exports = router;
