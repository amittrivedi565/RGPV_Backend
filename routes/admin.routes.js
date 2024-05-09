const router = require('express').Router()
const authController = require("../controllers/auth.controller")


router.get('/signin',authController.signInGet)
router.post('/signin',authController.signInPost)

module.exports = router