var express = require('express')
var router = express.Router()

var AdminController = require('../controller/admin_controller')

router.get('/', (req, res) => {
  res.status(200).json({ message: "Api workshop" })
})
router.post('/login', AdminController.login)
router.post('/registration', AdminController.registration)

module.exports = router