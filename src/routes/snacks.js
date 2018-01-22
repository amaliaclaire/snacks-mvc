const express = require('express')
const router = express.Router()
const ctrl = require('../controller/snacks')

router.get('/', ctrl.getSnacks)
router.post('/', ctrl.createSnack)

module.exports = router
