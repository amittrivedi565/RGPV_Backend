const router = require('express').Router()
const notesController = require('../controllers/notes.controller')

// homepage route
router.get('/',notesController.homepageGet)

module.exports = router