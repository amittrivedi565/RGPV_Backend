const router = require('express').Router()
const notesController = require('../controllers/notes.controller')

router.get('/',notesController.homepageGet.controller)

module.exports = router